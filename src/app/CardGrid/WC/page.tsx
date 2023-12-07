import React from 'react'
import Model from "./model";
import CenterData from "./centerData";

function Page() {
    return (
        <div className="mx-4 my-6">
            <div className="w-full p-4 bg-[url('https://cdn.pixabay.com/photo/2017/01/16/19/40/mountains-1985027_1280.jpg')]  bg-cover bg-center bg-gray-300 bg-blend-multiply text-center h-60  border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h1 className="p-16 text-5xl font-bold text-white dark:text-white">Centers</h1>
            </div>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 text-center mb-10   p-2 justify-center">
                {CenterData.map((center) => {
                    return (
                        <div key={center.id}
                            className="flex flex-col flex-1 justify-center max-w-sm relative p-6 px-4 py-3 m-5 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <h5
                                className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                                style={{ fontSize: 20 }}
                            >
                                {center.name}
                            </h5>

                            <Model data={center} />
                        </div>
                    );
                })}
            </div>
            <div className="w-full p-4 bg-[url('https://cdn.pixabay.com/photo/2017/01/16/19/40/mountains-1985027_1280.jpg')]  bg-cover bg-center bg-gray-300 bg-blend-multiply text-center h-5  border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            </div>
        </div>
    )
}

export default Page
