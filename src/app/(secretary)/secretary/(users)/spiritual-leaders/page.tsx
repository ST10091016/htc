import React from "react";
import CenterMemberCard from "./CenterMemberCard";
import AddMemberForm from "./components/Add/AddSpiritualLeaderForm";
import prisma from "@/lib/prisma/prismadb";
import Link from "next/link";

export default async function Page() {

  return (
    <>
      <div className="flex py-5 justify-end">
        <Link
          href="/secretary/spiritual-leaders/add-spiritual-leader"
          className="block text-white shadow-lg hover:shadow-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Add Leader
        </Link>
      </div>
      <CenterMemberCard />
    </>
  );
}
