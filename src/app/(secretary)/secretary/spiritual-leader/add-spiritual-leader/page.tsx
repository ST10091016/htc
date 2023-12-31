import React from "react";
import AddSpiritualLeaderForm from "../components/Add/AddSpiritualLeaderForm"
import prisma from "@/lib/prisma/prismadb";

export default async function Page() {
  const centers = await prisma.center.findMany().finally(() => {
    prisma.$disconnect();
  });
  return (
    <>
      <AddSpiritualLeaderForm centers={centers} />
    </>
  );
}
