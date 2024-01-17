import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8">
        <div>
          <XCircleIcon className="mx-auto h-12 w-auto text-red-500" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            Payment Canceled
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Your payment has been canceled. If you have any questions or
            concerns, please contact our support team.
          </p>
        </div>
        <div className="mt-5">
          <Link
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            href="#"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}

function XCircleIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}
