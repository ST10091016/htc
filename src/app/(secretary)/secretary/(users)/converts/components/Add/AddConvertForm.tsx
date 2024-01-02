"use client";

import toast from "react-hot-toast";
import React, { useState, useRef } from "react";
import AddButton from "../../../_components/AddButton";
import { addConvert } from "@/app/(secretary)/secretary/(users)/_actions/converts";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddConvertForm({ centers }: { centers: any }) {
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
              const result = await addConvert(
                formDta,
                date.startDate
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
                router.push("/secretary/converts");
              }
            }}
          >
            <h1 className="text-center m-5 text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-gray-100">
              Add Convert
            </h1>
            <div className="grid gap-4 mb-4 grid-cols-2">


              <div className="col-span-1">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
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
              <div className="col-span-1">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="johnbaptist@gmail.com"
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gender
                </label>

                <select
                  name="gender"
                  id="gender"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="male"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="status"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Status
                </label>
                <input
                  type="text"
                  name="status"
                  id="status"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="johnbaptist@gmail.com"
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="followUp"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Follow Up
                </label>
                <input
                  type="text"
                  name="followUp"
                  id="followUp"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="johnbaptist@gmail.com"
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="actions"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Actions
                </label>
                <input
                  type="text"
                  name="actions"
                  id="actions"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="johnbaptist@gmail.com"
                />
              </div>

              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Center
                </label>
                <select
                  name="centerId"
                  id="centerId"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                >
                  {centers.map((center: any) => (
                    <option key={center.id} value={center.id}>
                      {center.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between">
              <AddButton />
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
