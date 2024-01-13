import React from "react";
import Hero from "../Home/Hero/Hero";
import About from "../Home/About/About";
import VOD from "../Home/VOD/VOD";
import Other from "../Home/Other/Other";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VOD />
      <Other />
    </>
  );
}
