"use client";

import toast from "react-hot-toast";
import React, { useState, useRef } from "react";
import AddMemberButton from "../../../_components/AddButton";
import { addWorshipCenter } from "@/app/(secretary)/secretary/(users)/_actions/worshipCenter";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddMemberForm({centers} : {centers: any}) {
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleValueChange = (newDate: any) => {
    setDate(newDate);
  };

  return (
    <>
      <div className="m-auto h-screen my-5">
        <div className="flex flex-col items-center justify-center m-auto h-screen align-middle">
          <form
            ref={ref}
            className="p-4 my-5 md:p-5 w-10/12 md:w-10/12 shadow-xl bg-white dark:bg-gray-800 rounded-lg"
            action={async (formDta: FormData) => {
              const result = await addWorshipCenter(
                formDta,
              ).then((result) => {
                if (result === null) {
                  throw new Error("Center Member is null");
                }
                // ref.current?.reset();
                setDate({
                  startDate: null,
                  endDate: null,
                });
                return result;
              });
              if (result?.error) {
                toast.error(result?.error as string);
              } else {
                toast.success("Added Successfully");
                router.push("/secretary/worship-centers");
              }
            }}
          >
            <h1 className="text-center m-5 text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-gray-100">
              Add Center
            </h1>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Center name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
             

              <div className="col-span-1">
                <label
                  htmlFor="member"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Member
                </label>
                <input
                  type="text"
                  name="member"
                  id="member"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="location"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="elderName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Elder Name
                </label>
                <input
                  type="text"
                  name="elderName"
                  id="elderName"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="centerLeader"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Center Leader
                </label>
                <input
                  type="text"
                  name="centerLeader"
                  id="centerLeader"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="centerSize"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Center Size
                </label>
                <input
                  type="number"
                  name="centerSize"
                  id="centerSize"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="johnbaptist@gmail.com"
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="+27 12 345 6789"
                  required={false}
                />
              </div>   
            </div>
            <div className="flex justify-between">
              <AddMemberButton />
              <Link
                href="/members"
                className="text-white inline-flex items-center bg-blue-300 hover:bg-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
