"use client";

import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { UpdateConvert } from "../../../_actions/converts";
import UpdateButton from "../../../_components/UpdateButton";

export default function UpdateForm({ convert }: { convert: any }) {
  const [firstName, setFirstName] = useState(convert.firstName);
  const [lastName, setLastName] = useState(convert.lastName);
  const [phone, setPhone] = useState(convert.phone);
  const [email, setEmail] = useState(convert.email);
  const [gender, setGender] = useState(convert.gender);
  const [status, setStatus] = useState(convert.status);
  const [followUp, setFollowUp] = useState(convert.followUp);
  const [actions, setActions] = useState(convert.actions);
  const [hashedPassword, setHashedPassword] = useState(convert.hashedPassword);
  const [centerId, setCenterId] = useState(convert.centerId);

  return (
    <>
      {/* <!-- Modal body --> */}
      <div className="p-6">
        <form
          action={async (formData: any) => {
            const result = await UpdateConvert(formData, convert.id).then(
              (result) => {
                if (result === null) {
                  throw new Error("Project is null");
                }

                return result;
              }
            );
            if (result?.error) {
              toast.error(result?.error as string);
            } else {
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
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Member email"
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <input
                type="gender"
                name="gender"
                id="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                placeholder="Member email"
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <input
                type="status"
                name="status"
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Member email"
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="followUp"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Follow Up
              </label>
              <input
                type="followUp"
                name="followUp"
                id="followUp"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={followUp}
                onChange={(e) => setFollowUp(e.target.value)}
                placeholder="Member email"
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="actions"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Actions
              </label>
              <input
                type="actions"
                name="actions"
                id="actions"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={actions}
                onChange={(e) => setActions(e.target.value)}
                placeholder="Member email"
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="hashedPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Password
              </label>
              <input
                type="hashedPassword"
                name="hashedPassword"
                id="hashedPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={hashedPassword}
                onChange={(e) => setHashedPassword(e.target.value)}
                placeholder="Member email"
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="centerId"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Center ID
              </label>
              <input
                type="centerId"
                name="centerId"
                id="centerId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={centerId}
                onChange={(e) => setCenterId(e.target.value)}
                placeholder="Member email"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <UpdateButton />
          </div>
        </form>
      </div>
    </>
  );
}
