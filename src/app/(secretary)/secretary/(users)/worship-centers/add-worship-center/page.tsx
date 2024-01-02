import React from "react";
import AddMemberForm from "../components/Add/AddMemberForm"
import prisma from "@/lib/prisma/prismadb";

export default async function Page() {
  const centers = await prisma.center.findMany().finally(() => {
    prisma.$disconnect();
  });
  return (
    <>
      <AddMemberForm centers={centers} />
    </>
  );
}
