"use client";

import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import AddButton from "../(users)/_components/AddButton";
import { addVideo} from "../(users)/_actions/videos";
// import UpdateButton from "../../../_components/UpdateButton";

export default function AddVideo() {
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
        Add Video
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
                Video Details
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
                  const result = await addVideo(formData).then((result) => {
                    if (result === null) {
                      throw new Error("Project is null");
                    }
                    closeModal();
                    return result;
                  });
                  if (result?.error) {
                    closeModal();
                    toast.error(result?.error as string);
                  } else {
                    closeModal();
                    toast.success("Video Added Successfully");
                  }
                }}
              >
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Title"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Date"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="link"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Link
                    </label>
                    <input
                      type="text"
                      name="link"
                      id="link"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="https:"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <AddButton />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
