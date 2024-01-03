import Image from "next/image";
import DeleteModel from "./components/Delete/DeleteModel";
import UpdateModel from "./components/Update/UpdateForm";
import ViewModel from "./components/View/ViewModel";
import prisma from "@/lib/prisma/prismadb";
import { revalidatePath } from "next/cache";

export const revalidate = 500;
export default async function ConvertCard() {

  const members:any = await prisma.convert.findMany().finally(() => revalidatePath("/secretary"))

  console.log(members);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols- 2xl:gap-8 w-12/12 m-auto">
        {members.map((member:any) => {
          return (
            <div
              key={member.id}
              className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="px-4 p-4">
                <div className="flex flex-col lg:flex-row items-center h-32 lg:h-auto">
                  <div className="flex-shrink-0">

                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="flex gap-1 items-center text-sm font-medium text-gray-900 truncate dark:text-white">
                      {member.firstName} {member.lastName}
                    </p>
                    <p className="text-sm text-center lg:text-start text-gray-500 truncate dark:text-gray-400">
                      {member.email} - {member.phone}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <ViewModel member={member} />
                    <UpdateModel member={member} />
                    <DeleteModel memberId={member.id} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
