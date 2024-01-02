"use client";

import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { UpdateSpiritualLeader } from "../../../_actions/spiritualLeader";
import UpdateButton from "../../../_components/UpdateButton";

export default function UpdateModel({ member }: { member: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState(member.firstName);
  const [lastName, setLastName] = useState(member.lastName);
  const [email, setEmail] = useState(member.email);
  const [mobile, setMobile] = useState(member.mobile);
  const [class_, setClass] = useState(member.class);
  const [tag, setTag] = useState(member.tag);

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
        Update
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
                Update Member Details
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
              <form
                action={async (formData: any) => {
                  const result = await UpdateSpiritualLeader(formData, member.id).then(
                    (result) => {
                      if (result === null) {
                        throw new Error("Project is null");
                      }
                      closeModal();
                      return result;
                    }
                  );
                  if (result?.error) {
                    closeModal();
                    toast.error(result?.error as string);
                  } else {
                    closeModal();
                    toast.success("Project Updated");
                  }
                }}
              >
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="firstNam"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Member first name"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="firstNam"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Member last name"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Member email"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="mobile"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mobile
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Member mobile"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="class"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Class
                    </label>
                    <select
                      name="class"
                      id="class"
                      value={class_}
                      onChange={(e) => setClass(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value="Children">Children</option>
                      <option value="Teens">Teens</option>
                      <option value="Baptismal">Baptismal</option>
                      <option value="Youth">Youth</option>
                      <option value="Adult">Adult</option>
                      <option value="Agape">Agape</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="mobile"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tag
                    </label>
                    <select
                      name="tag"
                      id="tag"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value="admin">Admin</option>
                      <option value="elder">Elder</option>
                      <option value="pastor">Pastor</option>
                      <option value="member">Member</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between">
                  <UpdateButton />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
