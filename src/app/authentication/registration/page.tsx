"use client";

import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AdminForm from "./components/AdminForm/AdminForm";
import CenterMemberForm from "./components/CenterMemberForm/CenterMemberForm";
import ConvertFrom from "./components/ConvertFrom/ConvertFrom";
import SecretaryForm from "./components/SecretaryForm/SecretaryForm";

export default function Page() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [role, setRole] = useState("");

  // if (session) {
  //   if (session.user?.role === "student") {
  //     router.push("/student/dashboard");
  //   }
  // }

  if (!session && status !== "loading") {
    return (
      <section className="bg-center bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/1137332/pexels-photo-1137332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-stone-400 bg-blend-multiply">
        <div className="flex items-center justify-center h-screen">
          <div className="w-full mx-4 max-w-sm p-4 align-middle bg-white bg-opacity-10 rounded-lg shadow-xl hover:shadow-2xl sm:p-6 md:p-8 transition-all ease-in-out">
            <form className="space-y-6" method="post">
              <h5 className="text-xl font-medium text-center text-white">
                Sign Up
              </h5>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
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
                  <option
                    className="bg-gray-500 text-white"
                    value="centerMember"
                  >
                    Center Member
                  </option>
                  <option className="bg-gray-500 text-white" value="convert">
                    Convert
                  </option>
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
              {role === "secretary" && <SecretaryForm />}
              {role === "admin" && <AdminForm />}

              <div className="text-sm font-medium text-gray-200">
                Already have an account?{" "}
                <a
                  href="/authentication/login"
                  className="text-blue-700 hover:underline"
                >
                  Login
                </a>{" "}
                Or{" "}
                <a href="/" className="text-blue-700 hover:underline">
                  Back Home
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
