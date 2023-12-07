import React from 'react'

function Hero() {
    return (
        <div>
            {/* <div className="bg-[url('../../public/Images/wheat-header.jpeg')] bg-cover bg-center bg-gray-400 bg-blend-multiply h-auto text-white py-24 px-10 object-fill"> */}
            <div className="bg-[url('https://images.pexels.com/photos/946186/pexels-photo-946186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-2/3 bg-cover bg-center bg-gray-400 bg-blend-multiply text-white py-24 px-10">
                <div>
                    <p className="text-5xl text-white text-center font-extrabold">Harvest Tabernacle Church</p>
                    <p className="text-xl  text-white font-semibold mb-10 my-4 text-center leading-none"> Establishing A Matured Christian Society </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
