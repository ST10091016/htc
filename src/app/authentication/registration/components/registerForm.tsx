"use client";

import React from "react";
import { useState } from "react";
import AdminForm from "./AdminForm/AdminForm";
import CenterMemberForm from "./CenterMemberForm/CenterMemberForm";
import ConvertFrom from "./ConvertFrom/ConvertFrom";
import SecretaryForm from "./SecretaryForm/SecretaryForm";

export default function RegisterForm({ centers }: { centers: any }) {
  const [role, setRole] = useState("");

  return (
    <div className="space-y-2">
      <h5 className="text-xl font-medium text-center text-white">Sign Up</h5>
      <div>
        <label className="block my-2 text-sm font-medium text-white">
          Account Type
        </label>
        <select
          name="role"
          onChange={(e) => {
            setRole(e.target.value);
          }}
          id="role"
          className="bg-gray-50 bg-opacity-20 text-white text-sm rounded-lg block w-full p-2"
          required
        >
          <option className="bg-gray-500 text-white" value=""></option>
          {/* <option className="bg-gray-500 text-white" value="centerMember">
            Center Member
          </option>
          <option className="bg-gray-500 text-white" value="convert">
            Convert
          </option> */}
          <option className="bg-gray-500 text-white" value="secretary">
            Secretary
          </option>
          <option className="bg-gray-500 text-white" value="admin">
            Admin
          </option>
        </select>
      </div>

      {role === "centerMember" && <CenterMemberForm />}
      {role === "convert" && <ConvertFrom />}
      {role === "secretary" && <SecretaryForm centers={centers} />}
      {role === "admin" && <AdminForm />}

      <div className="text-sm font-medium text-gray-200">
        Already have an account?{" "}
        <a
          href="/authentication/login"
          className="text-black hover:underline"
        >
          Login
        </a>{" "}
        Or{" "}
        <a href="/" className="text-black hover:underline">
          Back Home
        </a>
      </div>
    </div>
  );
}
