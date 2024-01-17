import Link from "next/link";

export default function page() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-8 bg-green-50 dark:bg-green-900">
      <header className="flex flex-col items-center gap-4">
        <CheckCircleIcon className="h-24 w-24 text-green-500 dark:text-green-400" />
        <h1 className="text-4xl font-bold text-green-600 dark:text-green-300">
          Donation Successful!
        </h1>
      </header>
      <main className="flex flex-col items-center gap-4 px-4 md:px-6">
        <p className="text-xl text-center text-gray-700 dark:text-gray-300">
          Thank you for your generous donation! Your contribution will make a
          significant difference.
        </p>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400">
          We will send a confirmation email with all the details of your
          donation. If you have any questions, feel free to contact our support
          team.
        </p>
      </main>
      <footer>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-300 dark:text-green-900 dark:hover:bg-green-200 dark:focus-visible:ring-green-700"
          href="#"
        >
          Return to Homepage
        </Link>
      </footer>
    </section>
  );
}

function CheckCircleIcon(props: any) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
