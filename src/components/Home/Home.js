import React, { useContext } from "react";
import { TravelContext } from "../../App";
import Navbar from "../Navbar/Navbar";
import Destinations from "../Destinations/Destinations";

const Home = () => {
  const [destination] = useContext(TravelContext);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${destination.image})`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Navbar color="white" />
      <Destinations />
    </div>
  );
};

export default Home;
