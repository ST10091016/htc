import React from "react";
import AddEvent from "./AddNews";
import NewsCard from "./NewsCard";

export default function page() {
  return (
    <>
      <div className="flex py-5 justify-end">
        <AddEvent />
      </div>
      <NewsCard />
    </>
  );
}
