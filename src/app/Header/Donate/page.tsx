import React from 'react'

function Page() {
  return (
    <div className="">
      <div className="mx-5 mt-4 text-center bg-cover h-50  bg-center bg-gray-400 bg-blend-multiply bg-[url('https://images.pexels.com/photos/946186/pexels-photo-946186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <section className="">
          <div className="flex flex-col items-center justify-center px-10 py-3 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-gray-300 bg-opacity-60 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                Donate To Harvest
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label className="block mb-2 text-sm text-left font-medium text-white dark:text-white">First Name</label>
                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name here" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-left font-medium text-white dark:text-white">Last Name</label>
                    <input type="surname" name="surname" id="surname" placeholder="Enter your surname here" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-left font-medium text-white dark:text-white">Reason</label>
                    <input type="reason" name="reason" id="reason" placeholder="Enter the reason for your donation" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-left text-white dark:text-white">Amount</label>
                    <input type="amount" name="amount" id="amount" placeholder="R" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <button type="submit" className="w-full   transition-colors duration-600  shadow-xl text-white bg-emerald-800 hover:bg-emerald-500 shadow-emerald-800/30   group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt  text-whiterelative inline-flex items-center justify-center px-8 py-4 text-lg font-bold  font-pj  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-center dark:bg-primary-600 dark:hover:bg-primary-700 uppercase dark:focus:ring-primary-800">Donate</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Page
