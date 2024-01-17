"use client";
import React from "react";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";

function Page() {
  return (
    <div className="">
      <Header />
      <div className="mx-5 mt-4 text-center bg-cover h-50  bg-center  sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <section className="">
          <div className="flex flex-col items-center justify-center  py-3 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white bg-opacity-60 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-800 md:text-2xl dark:text-gray-800">
                  Donate To Harvest
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Your generous donation helps us continue our mission
                </p>
                <form
                  method="post"
                  action="https://www.payfast.co.za/eng/process"
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label className="block mb-2 text-sm text-left font-medium text-gray-800 dark:text-gray-800">
                      First Name
                    </label>
                    <input
                      type="name"
                      required
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your name here"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-left font-medium text-gray-800 dark:text-gray-800">
                      Last Name
                    </label>
                    <input
                      required
                      type="surname"
                      name="surname"
                      id="surname"
                      placeholder="Enter your surname here"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-left font-medium text-gray-800 dark:text-gray-800">
                      Reason
                    </label>
                    <input
                      required
                      type="reason"
                      name="reason"
                      id="reason"
                      placeholder="Enter the reason for your donation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <input
                    type="hidden"
                    name="return_url"
                    value={`${process.env.NEXT_URL}/success`}
                  />
                  <input
                    type="hidden"
                    name="cancel_url"
                    value={`${process.env.NEXT_URL}/cancel`}
                  />
                  <input
                    type="hidden"
                    name="notify_url"
                    value={`${process.env.NEXT_UR}/notify`}
                  />
                  <input
                    type="hidden"
                    name="merchant_id"
                    value={process.env.MERCHANT_ID}
                  />
                  <input
                    type="hidden"
                    name="merchant_key"
                    value={process.env.MERCHANT_KEY}
                  />

                  <div>
                    <label className="block mb-2 text-sm font-medium text-left text-gray-800 dark:text-gray-800">
                      Amount
                    </label>
                    <input
                      required
                      type="amount"
                      name="amount"
                      id="amount"
                      placeholder="R"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <input type="hidden" name="item_name" value="Test Product" />
                  <button
                    type="submit"
                    className="w-full transition-colors duration-600 rounded-lg shadow-xl text-white bg-green-400 inline-flex items-center justify-center px-8 py-4 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-center dark:bg-primary-600 dark:hover:bg-primary-700 uppercase dark:focus:ring-primary-800"
                  >
                    Donate
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
