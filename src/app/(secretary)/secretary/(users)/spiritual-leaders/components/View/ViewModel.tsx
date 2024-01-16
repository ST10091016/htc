"use client";

import React, { useState } from "react";

export default function ViewModel({ member }: { member: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <!-- Modal toggle --> */}
      <button
        onClick={openModal}
        type="button"
        className="block text-white bg-blue-700 shadow-lg hover:shadow-xl font-medium rounded-lg text-sm px-2 py-2 text-center transition duration-300 ease-in-out"
      >
        View
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="crud-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          isModalOpen ? "fixed flex justify-center items-center" : "hidden"
        } inset-0 w-full h-full bg-black bg-opacity-50 z-50 transition-opacity duration-500 ease-in-out`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Spiritual Leader Details
              </h3>
              <button
                onClick={closeModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 md:col-span-1">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-extrabold text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  {member.firstName}
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label
                    htmlFor="firstNam"
                    className="block mb-2 text-sm font-extrabold text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  {member.lastName}
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-extrabold text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  {member.email}
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-extrabold text-gray-900 dark:text-white"
                  >
                    Phone
                  </label>
                  {member.phone}
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label
                    htmlFor="role"
                    className="block mb-2 text-sm font-extrabold text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  {member.role} 
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-extrabold text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  {member.baptism}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
