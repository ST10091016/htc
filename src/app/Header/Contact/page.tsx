"use client";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../../../app/common/Footer/Footer";
import Header from "../../../app/common/Header/Header";

export default function Home() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async () => {

    try {
      //api for the email, so that it sends to the person receiving the email
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      const data = await response.json();

      if (data.success) {
        // Handle successful form submission, e.g., show a success message
        console.log("Email sent successfully");
      } else {
        // Handle form submission error, e.g., show an error message
        console.error("Error submitting form:", data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div>
        <Header />
        {/* <div className="bg-[url('../../public/Images/wheat-header.jpeg')] bg-cover bg-center bg-gray-400 bg-blend-multiply h-auto text-white py-24 px-10 object-fill"> */}
        <div className="bg-[url('https://images.pexels.com/photos/946186/pexels-photo-946186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-2/3 bg-cover bg-center bg-gray-400 bg-blend-multiply text-white py-24 px-10">
          <div>
            <p className="text-6xl text-white text-center font-extrabold">Contact Us</p>
            <p className="text-xl  text-white font-semibold mb-10 my-4 text-center leading-none"> Need more details about the church or want to join? Let us know!</p>
          </div>
        </div>
      </div>

      <div className="container my-10 mx-auto md:px-6">
        <section className="mb-32">
          <div className="relative  overflow-hidden h-[10vh] bg-no-repeat bg-[url('https://images.pexels.com/photos/946186/pexels-photo-946186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-gray-400 bg-blend-multiply text-white py-24 px-10"></div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="mx-auto mb-12 text-center lg:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <Link className="font-medium" href="mailto:gwazelabc@gmail.com">
                    gwazelabc@gmail.com
                  </Link>
                </div>
                <div className="mx-auto mb-12 text-center lg:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <Link
                    className="font-medium"
                    href="https://goo.gl/maps/P2vTzMpX3uDEPxrr9"
                  >
                    Mzinti, Mpumalanga, South Africa, 1352
                  </Link>
                </div>
                <div className="mx-auto mb-6 text-center md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <Link className="font-medium" href="tel:+27827855281">
                    +27 82 785 5281
                  </Link>
                </div>
                <div className="mx-auto text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    />
                  </svg>
                  <Link
                    className="font-medium"
                    href=" https://m.facebook.com/p/Harvest-Tabernacle-Church-HTC-100064343185443/"
                  >
                    Harvest Tabernacle Church
                  </Link>
                </div>
              </div>
              <div className="mx-auto max-w-[700px]">
                <form onSubmit={handleSubmit}>
                  <div className="relative mb-6">
                    <label

                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      type="name"
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                      }}
                      id="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="relative mb-6">
                    <label

                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className="relative mb-6">
                    <label

                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="subject"
                      id="subject"
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                      }}
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </div>
                  <div className="relative mb-6">
                    <label

                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"

                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                      }}

                      required
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type your message here"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block w-full rounded bg-blue-400 hover:bg-green-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
