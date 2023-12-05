import React from 'react'

export default function VOD() {
  return (
    <div>
    <div
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <img
        className="rounded-lg"
        src="https://tecdn.b-cdn.net/img/new/slides/017.webp"
        alt="" />
      <div className="absolute top-0 p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-white">
          Card title
        </h5>
        <p className="mb-4 text-base text-white">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <p className="text-base text-white">
          <small className="text-white">Last updated 3 mins ago</small>
        </p>
      </div>
    </div></div>
  )
}
