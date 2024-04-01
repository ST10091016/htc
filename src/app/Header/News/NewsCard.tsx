import React from 'react'
import prisma from '@/lib/prisma/prismadb'


export default async function NewsCard() {
  const news = await prisma.news.findMany()

  if (news.length === 0) {
    return (
      <>
        <div className="flex justify-center align-bottom h-screen">
          <div className="min-h-full m--10 px-4 py-16 sm:px-6 sm:py-24 grid place-items-center lg:px-8">
            <div className="mx-auto max-w-max">
              <main className="sm:flex">
                <p className="bg-gradient-to-br from-blue-900 to-cyan-600 bg-clip-text md:text-7xl font-bold tracking-tight text-transparent text-6xl">
                  Unavailable
                </p>
                <div className="sm:ml-6">
                  <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                      No News found
                    </h1>
                    <p className="mt-1 text-base text-gray-500">
                      Please check later.
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
    <>
      <div className="bg-[url('https://images.pexels.com/photos/3944425/pexels-photo-3944425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-2/3 bg-cover bg-center bg-gray-400 bg-blend-multiply text-white py-24 px-10">
        <div>
          <p className="text-6xl text-white text-center font-extrabold">News</p>
        </div>
      </div>

      {news.map((newItem) => {
        return (

          <div key={newItem.id} className='m-3'>
            <div className="w-full p-4 bg-white  border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold text-gray-700 dark:text-white">{newItem.title}</h5>
              <span>{newItem.date.toString()}</span>
              <p className="mb-5 text-base text-gray-500 sm:text-md dark:text-gray-400">{newItem.content}</p>
              <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
