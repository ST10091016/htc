"use client";

import React from "react";
import SecretaryFormButton from "./SecretaryFormButton";
import { registerSecretary } from "../../_actions/secretaryRegistration";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SecretaryForm({ centers }: { centers: any }) {
  const router = useRouter();
  return (
    <>
      <form
        action={async (formData: FormData) => {
          const result = await registerSecretary(formData).then((result) => {
            if (result === null) {
              throw new Error("Secretary is null");
            }
            return result;
          });
          if (result?.error) {
            toast.error(result?.error as string);
          } else {
            router.push("/authentication/login");
            toast.success("Secretary successfully registered");
          }
        }}
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            className="bg-gray-50 bg-opacity-20 text-white text-sm rounded-lg block w-full p-2.5"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <label className="block my-2 text-sm font-medium text-white">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="bg-gray-50 bg-opacity-20 text-white text-sm rounded-lg block w-full p-2.5"
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <label className="block my-2 text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 bg-opacity-20  text-white text-sm rounded-lg block w-full p-2.5"
            placeholder="example@example.com"
            required
          />
        </div>
        <div>
          <label className="block my-2 text-sm font-medium text-white">
            Contact Number
          </label>
          <input
            type="number"
            name="contactNumber"
            id="contactNumber"
            className="bg-gray-50 bg-opacity-20  text-white text-sm rounded-lg block w-full p-2.5"
            placeholder="+27 12 345 6789"
            required
          />
        </div>
        <div>
          <label className="block my-2 text-sm font-medium text-white">
            Center
          </label>
          <select
            name="centerId"
            id="centerId"
            className="bg-gray-50 bg-opacity-20 text-white text-sm rounded-lg block w-full p-2"
            required
          >
            {centers.map((center: any) => (
              <option
                key={center.id}
                className="bg-gray-500 text-white"
                value={center.id}
              >
                {center.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block my-2 text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 bg-opacity-20  text-white text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>
        <SecretaryFormButton />
      </form>
    </>
  );
}
