import prisma from '@/lib/prisma/prismadb'
import React from 'react'

export default async function page() {

  

  const cardDate = [
    // {
    //   id: ,
    //   title: "",
    //   number: "",
    //   icon: ()
    // }
    {
      id: 1,
      title: "Converts",
      number: (await prisma.convert.findMany()).length,
      icon: (<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="w-6 h-6 text-gray-500 dark:text-gray-400"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>)
    },
    {
      id: 2,
      title: "Center Member",
      number: (await prisma.center_Member.findMany()).length,
      icon: (<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="w-6 h-6 text-gray-500 dark:text-gray-400"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>)
    },
    {
      id: 3,
      title: "Spiritual Leaders",
      number: (await prisma.spiritual_leader.findMany()).length,
      icon: (<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="w-6 h-6 text-gray-500 dark:text-gray-400"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>)
    },
    {
      id: 4,
      title: "Worship Center",
      number: (await prisma.center.findMany()).length,
      icon: (<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="w-6 h-6 text-gray-500 dark:text-gray-400"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>)
    }
  ]

  return (
    <><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cardDate.map((data) => {
        return (
          <div key={data.id} className="rounded-lg border bg-card text-card-foreground shadow-sm flex-1" data-v0-t="card">
            <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
              <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">{data.title}</h3>
              {data.icon}
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold">{data.number}</div>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}
