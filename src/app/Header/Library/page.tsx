import React from 'react'
import Image from 'next/image';

function Page() {
    return (
        <div >
            <div>
                {/* <div className="bg-[url('../../public/Images/wheat-header.jpeg')] bg-cover bg-center bg-gray-400 bg-blend-multiply h-auto text-white py-24 px-10 object-fill"> */}
                <div className="bg-[url('https://images.pexels.com/photos/946186/pexels-photo-946186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-2/3 bg-cover bg-center bg-gray-400 bg-blend-multiply text-white py-24 px-10">
                    <div>
                        <p className="text-6xl text-white text-center font-extrabold">Library</p>
                        <p className="text-xl  text-white font-semibold mb-10 my-4 text-center leading-none">Establishing A Matured Christian Society</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 mx-10 mt-10">
                <a href="https://ssw.global.bible/bible/63bfeebab582b5c4-01/MAT.1" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <Image className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" width={600} height={600} style={{ height: '300px', width: '400px' }} src="https://images.pexels.com/photos/8383409/pexels-photo-8383409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SeSwati Bible</h5>

                    </div>
                </a>

                <a href="https://thekingsbible.com/" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <Image className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" width={600} height={600} style={{ height: '300px', width: '400px' }} src="https://images.pexels.com/photos/8383409/pexels-photo-8383409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">English Bible</h5>
                    </div>
                </a>
            </div>

            <div>
                <br />
                <br />
                <div className="flex items-center justify-center ml-40 w-9/12">
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Page
