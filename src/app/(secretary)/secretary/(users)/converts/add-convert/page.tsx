import React from "react";
import AddConvertForm from "./Add/AddConvertForm"
import prisma from "@/lib/prisma/prismadb";

export default async function Page() {
  const centers = await prisma.center.findMany().finally(() => {
    prisma.$disconnect();
  });
  return (
    <>
      <AddConvertForm centers={centers} />
    </>
  );
}
