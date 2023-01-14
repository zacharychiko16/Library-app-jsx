import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import FeaturedBooks from "../components/FeaturedBooks";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <FeaturedBooks />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
