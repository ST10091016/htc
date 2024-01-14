import React from 'react';
import EventCard from './EventCard';
import Header from "../../app/common/Header/Header";
import Footer from "../../app/common/Footer/Footer";

export default function Page() {
    return (
        <>
            <Header />
            <div className="bg-[url('https://images.pexels.com/photos/946186/pexels-photo-946186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-2/3 bg-cover bg-center bg-gray-400 bg-blend-multiply text-white py-24 px-10">
                <div>
                    <p className="text-5xl text-white text-center font-extrabold">
                        Events
                    </p>
                </div>
            </div>
            <br />
            <EventCard />
            <Footer />
        </>
    )
}
