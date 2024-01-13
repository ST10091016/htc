import React from 'react'
import AddEvent from './AddEvent';
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="flex py-5 justify-end">
        <AddEvent />
      </div>
      {/* <ConvertCard /> */}
    </>
  )
}
