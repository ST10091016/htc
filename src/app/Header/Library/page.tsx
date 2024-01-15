import React from 'react'
import Image from 'next/image';
import Footer from "../../../app/common/Footer/Footer";
import Header from "../../../app/common/Header/Header";
import VideoCard from './VideoCard';
import prisma from '@/lib/prisma/prismadb';

async function Page() {
    const videos = await prisma.videos.findMany()
    return (
        <div >
            <Header />
            <div>
                {/* <div className="bg-[url('../../public/Images/wheat-header.jpeg')] bg-cover bg-center bg-gray-400 bg-blend-multiply h-auto text-white py-24 px-10 object-fill"> */}
                <div className="bg-[url('https://images.pexels.com/photos/946186/pexels-photo-946186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-2/3 bg-cover bg-center bg-gray-400 bg-blend-multiply text-white py-24 px-10">
                    <div>
                        <p className="text-6xl text-white text-center font-extrabold">Library</p>
                        <p className="text-xl  text-white font-semibold  my-2 text-center leading-none">Establishing A Matured Christian Society</p>
                    </div>
                </div>
            </div>

            <div className='m-auto flex justify-center'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 ">
                    <a href="https://ssw.global.bible/bible/63bfeebab582b5c4-01/MAT.1" className="flex col-span-1 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <Image className=" w-auto rounded-t-lg md:rounded-none md:rounded-s-lg" width={600} height={600} style={{ height: '300px', width: '400px' }} src="https://images.pexels.com/photos/8383409/pexels-photo-8383409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SeSwati Bible</h5>
                        </div>
                    </a>

                    <a href="https://thekingsbible.com/" className="flex col-span-1 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <Image className=" w-auto rounded-t-lg  md:rounded-none md:rounded-s-lg" width={600} height={600} style={{ height: '300px', width: '400px' }} src="https://images.pexels.com/photos/8383409/pexels-photo-8383409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">English Bible</h5>
                        </div>
                    </a>
                </div>
            </div>

            <VideoCard  />

            <Footer />
        </div>
    )
}

export default Page
