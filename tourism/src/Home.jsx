import React from "react";
import HeroSection from "./HeroSection";
import BlogList from "./Cards";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="m-20">
        <BlogList />
      </div>
    </div>
  );
};

export default HomePage;
