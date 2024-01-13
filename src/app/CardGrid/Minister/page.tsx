import React from "react";
import Image from "next/image";
import Apostle from "public/Images/apostle.jpg";
import Prophet from "public/Images/prophet.jpg";
import Evan1 from "public/Images/evangelist.jpg";
import Evan2 from "public/Images/evangelist2.jpeg";
import Evan3 from "public/Images/min3.jpg";
import Pastor from "public/Images/pastor.jpg";

const cardsData = [
  {
    title: "Apostle BC Nsingwane",
    description: "Founder of The Harvest Tabernacle Church.",
    imageUrl: Apostle,
  },
  {
    title: "Prophet TL Ndlala",
    description: "Lead Shepherd.",
    imageUrl: Prophet,
  },
  {
    title: "Evangelist Malungisa",
    description: "Part of The Harvest Tabernacle Church.",
    imageUrl: Evan1,
  },
  {
    title: "Evangelist Mahlalela",
    description: "Part of The Harvest Tabernacle Church.",
    imageUrl: Evan2,
  },
  {
    title: "Evangelist GV Nsingwane",
    description: "From The Matsulu Worship Center.",
    imageUrl: Evan3,
  },
  {
    title: "Pastor AP Khoza",
    description: "From The Magudu Worship Center.",
    imageUrl: Pastor,
  },
];

function Page() {
  return (
    <div className="mx-4 my-6">
      <div className="w-full p-4 bg-[url('https://images.pexels.com/photos/946186/pexels-photo-946186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  bg-cover bg-center bg-gray-400 bg-blend-multiply text-center h-60  border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="p-16 text-5xl font-bold text-white dark:text-white">
          Church Ministers
        </h1>
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <a
            key={index}
            className="flex flex-col items-center bg-white border border-gray-100 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={card.imageUrl}
              alt=""
              style={{ height: "300px" }}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Page;
