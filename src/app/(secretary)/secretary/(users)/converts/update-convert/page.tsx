import React from "react";
import UpdateForm from "../components/Update/UpdateForm";
import prisma from "@/lib/prisma/prismadb";
import { revalidatePath } from "next/cache";

export default async function page() {
  const converts: any = await prisma.convert
    .findMany()
    .finally(() => revalidatePath("/secretary"));

  return (
    <>
      <UpdateForm convert={converts} />
    </>
  );
}
