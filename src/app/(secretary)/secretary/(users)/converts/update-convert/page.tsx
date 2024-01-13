import React from "react";
import UpdateForm from "./UpdateForm/UpdateForm";
import prisma from "@/lib/prisma/prismadb";
import { revalidatePath } from "next/cache";

export default async function page() {
  const converts: any = await prisma.convert
    .findMany()
    .finally(() => revalidatePath("/secretary"));

  const centers: any = await prisma.center
    .findMany()
    .finally(() => revalidatePath("/secretary"));

  return (
    <>
      <UpdateForm convert={await converts} centers={await centers} />
    </>
  );
}
