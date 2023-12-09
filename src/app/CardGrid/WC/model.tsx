"use client";
import React, { useState } from "react";


// Define the interface for the 'data' prop
interface Data {
    name: string;
    leader: string;
    elder?: string;
    contact: string;
  }
  
  interface ModelProps {
    data: Data;
  }
  
  export default function Model({ data }: ModelProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* <!-- Modal toggle --> */}
      <button
        data-modal-target="defaultModal"
        onClick={handleOpenModal}
        className="block text-white bg-blue-400 hover:bg-green-400  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        View Details
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
       
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 z-50 ${
          modalVisible ? "block" : "hidden"
        } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative w-full max-w-2xl max-h-full m-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
                Centre Details
              </h3>
              <button
                type="button"
                onClick={handleCloseModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-black ">
                Centre: {data.name}
              </p>
              <p className="text-base leading-relaxed text-black">
                Leader: {data.leader}
              </p>
              <p className="text-base leading-relaxed text-black">
                {data.elder ? `Elder: ${data?.elder}` : null}
              </p>
              <p className="text-base leading-relaxed text-black">
                Contact: {data.contact}
              </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={handleCloseModal}
                data-modal-hide="defaultModal"
                type="button"
                className="text-white bg-green-400 hover:bg-blue-400 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
