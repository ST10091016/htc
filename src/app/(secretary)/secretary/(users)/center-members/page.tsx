import React from "react";
import CenterMemberCard from "./CenterMemberCard";
import AddMemberForm from "./components/Add/AddMemberForm";
import prisma from "@/lib/prisma/prismadb";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <div className="flex py-5 justify-end gap-2">
        <Link
          href="/secretary/center-members/add-center-member"
          className="block text-white shadow-lg hover:shadow-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Add Member
        </Link>

        <Link
          href="/secretary/center-members/table"
          className="block text-white shadow-lg hover:shadow-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Table
        </Link>
      </div>
      <CenterMemberCard />
    </>
  );
}
