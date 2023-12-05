"use client";

import React from "react";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  const [data, setData] = useState({
    email: "",
    password: "",
    role: "student",
  });

  // if (session) {
  //   if (session.user?.role === "student") {
  //     router.push("/student/dashboard");
  //   } else {
  //     setTimeout(() => {
  //       signOut();
  //     }, 1000);
  //   }
  // }

  const loginUser = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    // signIn("credentials", { ...data, redirect: false }).then((callback) => {
    //   if (callback?.error) {
    //     setIsLoading(false);
    //     toast.error(callback.error);
    //   }

    //   if (callback?.ok && !callback?.error) {
    //     setIsLoading(false);
    //     toast.success("Logged in successfully!");
    //     setTimeout(() => {
    //       router.push("/student/dashboard");
    //     }, 1200); // Wait for 1.2 seconds (1200 milliseconds) before pushing
    //   }
    // });
  };

  if (!session && status !== "loading") {
    return (
      <section className="bg-center bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/1137332/pexels-photo-1137332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-stone-400 bg-blend-multiply">
        <div className="flex items-center justify-center h-screen ">
          <div className="w-full mx-4 max-w-sm p-4 align-middle bg-white bg-opacity-10 rounded-lg shadow-xl hover:shadow-2xl sm:p-6 md:p-8  transition-all ease-in-out">
            <form className="space-y-6">
              <h5 className="text-xl font-medium text-center text-white ">
                Sign In
              </h5>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                  id="email"
                  className="bg-gray-50 bg-opacity-20 text-white text-sm rounded-lg block w-full p-2"
                  placeholder="example@example.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 bg-opacity-20 text-white text-sm rounded-lg block w-full p-2"
                  required
                />
              </div>
              <button
                onClick={loginUser}
                className={`${
                  isLoading ? "cursor-not-allowed" : ""
                } w-full bg-primary text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center`}
              >
                {isLoading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-5 h-5 mr-2 text-gray-200 animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
              <div className="text-sm font-medium text-gray-200">
                Not registered?{" "}
                <a
                  href="/authentication/registration"
                  className="text-blue-700 hover:underline"
                >
                  Create account
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
