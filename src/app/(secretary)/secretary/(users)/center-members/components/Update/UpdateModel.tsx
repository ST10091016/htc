"use client";

import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { UpdateCenterMember } from "../../../_actions/centerMember";
import UpdateButton from "../../../_components/UpdateButton";

export default function UpdateModel({ member }: { member: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(member.title)
  const [firstName, setFirstName] = useState(member.firstName);
  const [lastName, setLastName] = useState(member.lastName);
  const [address, setAddress] = useState(member.address);
  const [postalCode, setPostalCode] = useState(member.postalCode);
  const [phone, setPhone] = useState(member.phone);
  const [email, setEmail] = useState(member.email);
  const [gender, setGender] = useState(member.gender);
  const [birthDate, setBirthDate] = useState(member.birthDate);
  const [baptism, setBaptism] = useState(member.baptism);
  const [hashedPassword, setHashedPassword] = useState(member.hashedPassword);
  const [centerId, setCenterId] = useState(member.centerId);

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
                  const result = await UpdateCenterMember(
                    formData,
                    member.id
                  ).then((result) => {
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
                    toast.success("Project Updated");
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
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Member first name"
                      required
                    />
                  </div>
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
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Member first name"
                      required
                    />
                  </div>
                  <div className="col-span-1">
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
                  <div className="col-span-1">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Member mobile"
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Gender
                    </label>
                    <input
                      type="text"
                      name="gender"
                      id="gender"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      placeholder="Member mobile"
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      htmlFor="postalCode"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      id="postalCode"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="Member mobile"
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Member mobile"
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      htmlFor="birthDate"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Birth Date
                    </label>
                    <input
                      type="text"
                      name="birthDate"
                      id="birthDate"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      placeholder="Member mobile"
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="baptism"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Baptism
                    </label>
                    <input
                      type="text"
                      name="baptism"
                      id="baptism"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={baptism}
                      onChange={(e) => setBaptism(e.target.value)}
                      placeholder="Member mobile"
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="hashedPassword"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Hashed Password
                    </label>
                    <input
                      type="text"
                      name="hashedPassword"
                      id="hashedPassword"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={hashedPassword}
                      onChange={(e) => setHashedPassword(e.target.value)}
                      placeholder="Member mobile"
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="centerId"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Center
                    </label>
                    <input
                      type="text"
                      name="centerId"
                      id="centerId"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={centerId}
                      onChange={(e) => setCenterId(e.target.value)}
                      placeholder="Member mobile"
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
