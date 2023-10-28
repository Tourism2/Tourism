import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="">
      <div className="relative overflow-hidden bg-cover bg-hero-image h-[550px] w-[950px] bg-no-repeat bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/a65481105910603.5f842ade71111.jpeg')]"></div>
      <div className="absolute right-8 top-40 text-center ">
        <h1 className="hero-text text-3xl text-black font-bold">
          Explore Jordan Hidden Treasures
        </h1>
        <p className="mt-4 text-xl text-black">
          JourneyJots is your gateway to the beauty of Jordan.{" "}
        </p>{" "}
        <p className="mt-4 text-xl text-black">
          Find a collection of blogs focused on Jordan hidden treasures
        </p>
        <p className="mt-4 text-xl text-black">
          and share your own adventures.
        </p>
        <Link to="/blogform">
          <button className="mt-8 bg-black hover:bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-2xl">
            Add Your Journey
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
