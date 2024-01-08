import DeleteModel from "./components/Delete/DeleteModel";
import ViewModel from "./components/View/ViewModel";
import prisma from "@/lib/prisma/prismadb";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export const revalidate = 500;
export default async function ConvertCard() {
  const converts: any = await prisma.convert
    .findMany()
    .finally(() => revalidatePath("/secretary"));
    
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols- 2xl:gap-8 w-12/12 m-auto">
        {converts.map((convert: any) => {
          return (
            <div
              key={convert.id}
              className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="px-4 p-4">
                <div className="flex flex-col lg:flex-row items-center h-32 lg:h-auto">
                  <div className="flex-shrink-0"></div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="flex gap-1 items-center text-sm font-medium text-gray-900 truncate dark:text-white">
                      {convert.firstName} {convert.lastName}
                    </p>
                    <p className="text-sm text-center lg:text-start text-gray-500 truncate dark:text-gray-400">
                      {convert.email} - {convert.phone}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <ViewModel convert={convert} />
                    <Link
                      href={`/secretary/converts/update-convert?id=${convert.id}`}
                      type="button"
                      className="block text-white bg-blue-700 shadow-lg hover:shadow-xl font-medium rounded-lg text-sm px-2 py-2 text-center transition duration-300 ease-in-out"
                    >
                      Update
                    </Link>
                    <DeleteModel memberId={convert.id} />
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
