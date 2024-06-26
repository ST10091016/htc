import React from "react";
import prisma from "@/lib/prisma/prismadb";
import UpdateEvents from "./UpdateEvent";
import DeleteEventModel from "./DeleteEventModel";


export default async function EventCard() {
  const events = await prisma.event.findMany();

  if (events.length === 0) {
    return (
      <>
        <div className="flex justify-center align-bottom h-screen">
          <div className="min-h-full m--10 px-4 py-16 sm:px-6 sm:py-24 grid place-items-center lg:px-8">
            <div className="mx-auto max-w-max">
              <main className="sm:flex">
                <div className="sm:ml-6">
                  <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                      No Events found
                    </h1>
                    <p className="mt-1 text-base text-gray-500">
                     Add an event.
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (


    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-8 w-11/12 m-auto">

      {events.map((event) => {
        return (
          <div
            key={event.id}
            className="border text-card-foreground mx-auto w-auto p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            <div className="flex flex-col space-y-1.5 p-2">
              <h3 className="tracking-tight text-xl font-bold text-gray-900 dark:text-gray-100">
                {event.name}
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  {event.date.toString()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="text-gray-700 text-sm dark:text-gray-300">
                  {event.time}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                >
                  <line x1="2" x2="5" y1="12" y2="12"></line>
                  <line x1="19" x2="22" y1="12" y2="12"></line>
                  <line x1="12" x2="12" y1="2" y2="5"></line>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                  <circle cx="12" cy="12" r="7"></circle>
                </svg>
                <span className="text-gray-700 text-sm dark:text-gray-300">
                  {event.location}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span className="text-gray-700 text-sm dark:text-gray-300">
                  Size Limit: {event.sizeLimit}
                </span>
              </div>
              <div className="flex justify-between">
                <DeleteEventModel eventId={event.id} />
                <UpdateEvents eventDetails={event} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
