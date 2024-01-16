"use client";

import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { UpdateWorshipCenter } from "../../../_actions/worshipCenter";
import UpdateButton from "../../../_components/UpdateButton";

export default function UpdateModel({ center }: { center: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(center.name);
  const [location, setLocation] = useState(center.location);
  const [elderName, setElderName] = useState(center.elderName);
  const [centerLeader, setCenterLeader] = useState(center.centerLeader);
  const [centerSize, setCenterSize] = useState(center.centerSize);
  const [contact, setContact] = useState(center.contact);

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
                Update Worship Center Details
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
                  const result = await UpdateWorshipCenter(formData, center.id).then(
                    (result) => {
                      if (result === null) {
                        throw new Error("Center is null");
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
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Member first name"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Contact
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Member mobile"
                    />
                  </div>


                  <div className="col-span-2">
                    <label
                      htmlFor="location "
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Location 
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location "
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Location"
                    />
                  </div>


                  <div className="col-span-2">
                    <label
                      htmlFor="elderName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Elder Name
                    </label>
                    <input
                      type="text"
                      name="elderName"
                      id="elderName "
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={elderName}
                      onChange={(e) => setElderName(e.target.value)}

                    />
                  </div>

                  <div className="col-span-2">
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={centerLeader}
                      onChange={(e) => setCenterLeader(e.target.value)}
                    />
                  </div>

                  <div className="col-span-2">
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={centerSize}
                      onChange={(e) => setCenterSize(e.target.value)}
                    />
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
