import React from 'react';
import Image from 'next/image';
import Worship from '../../../../public/Images/worship.jpg';
import Events from '../../../../public/Images/events.png';
import Minister from '../../../../public/Images/ministerpic.jpg';

function Other() {
    return (
        <div className="my-10 grid md:grid-cols-3 gap-3">
            <div className="flex-1 text-center px-4 py-2 m-2 max-w-sm md:max-w-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.15),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:shadow-xl rounded-lg dark:border-blue-300">
                <a href="/CardGrid/Minister">
                    <Image
                        className="rounded-t-lg w-full md:h-[380px]"
                        src={Minister}
                        alt=""
                    />
                </a>
                <div className="p-5">
                    <a href="/CardGrid/Minister">
                        <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-black dark:text-white">
                            Ministers
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-black dark:text-gray-100">
                        View the ministers who have harvested our church and transformed it
                        into what it is today.
                    </p>
                </div>
            </div>

            <div className="flex-1 text-center px-4 py-2 m-2 max-w-sm md:max-w-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.15),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:shadow-xl rounded-lg dark:border-blue-300">
                <a href="/CardGrid/WC">
                    <Image
                        className="rounded-t-lg w-full md:h-[380px]"
                        src={Worship}
                        alt=""
                    />
                </a>
                <div className="p-5">
                    <a href="/CardGrid/WC">
                        <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-black dark:text-white">
                            Worship Centers
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-black dark:text-gray-100">
                        Discover the diverse locations of the other Harvest Tabernacle
                        Churches and their communities.
                    </p>
                </div>
            </div>

            <div className="flex-1 text-center px-4 py-2 m-2 max-w-sm md:max-w-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.15),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:shadow-xl rounded-lg dark:border-blue-300">
                <a href="/CardGrid/Event">
                    <Image
                        className="rounded-t-lg w-full md:h-[380px]"
                        src={Events}
                        alt=""
                    />
                </a>
                <div className="p-5">
                    <a href="/CardGrid/Event">
                        <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-black dark:text-white">
                            Events
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-black dark:text-gray-100">
                        Join us for many joyous celebrations and activities that are being
                        hosted by our church.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Other;
