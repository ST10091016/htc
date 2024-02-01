import React from "react";
import ConvertCard from "./ConvertCard";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <div className="flex py-5 justify-end gap-2">
        <Link
          href="/secretary/converts/add-convert"
          className="block text-white shadow-lg hover:shadow-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Add Convert
        </Link>

        <Link
          href="/secretary/converts/table"
          className="block text-white shadow-lg hover:shadow-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Table
        </Link>
      </div>
      <ConvertCard />
    </>
  );
}
