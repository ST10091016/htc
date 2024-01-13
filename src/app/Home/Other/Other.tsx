import React from "react";
import Image from "next/image";
import Worship from "public/Images/worship.jpg";
import Events from "public/Images/events.png";
import Minister from "public/Images/ministerpic.jpg";

const cards = [
  {
    title: "Ministers",
    description:
      "View the ministers who have harvested our church and transformed it into what it is today.",
    image: Minister,
    link: "/CardGrid/Minister",
  },
  {
    title: "Worship Centers",
    description:
      "Discover the diverse locations of the other Harvest Tabernacle Churches and their communities.",
    image: Worship,
    link: "/CardGrid/WC",
  },
  {
    title: "Events",
    description:
      "Join us for many joyous celebrations and activities that are being hosted by our church.",
    image: Events,
    link: "/Event",
  },
];

function Other() {
  return (
    <div className="my-10 grid md:grid-cols-3 gap-3">
      {cards.map((card) => {
        return (
          <div
            key={card.title}
            className="flex-1 text-center px-4 py-2 m-2 max-w-sm md:max-w-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.15),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:shadow-xl rounded-lg dark:border-blue-300"
          >
            <a href={card.link}>
              <Image
                className="rounded-t-lg w-full md:h-[380px]"
                src={card.image}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href={card.link}>
                <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-black dark:text-white">
                  {card.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-black dark:text-gray-100">
                {card.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Other;
