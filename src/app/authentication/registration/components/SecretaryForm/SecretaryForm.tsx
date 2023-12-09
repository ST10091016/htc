import React from 'react'

export default function SecretaryForm() {
  return (
    <>
      <form action="">
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
          <label className="block mb-2 text-sm font-medium text-white">
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
          <label className="block mb-2 text-sm font-medium text-white">
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
          <label className="block mb-2 text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            pattern="" //reg exp
            placeholder="••••••••"
            className="bg-gray-50 bg-opacity-20  text-white text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>
      </form>
    </>
  );
}
