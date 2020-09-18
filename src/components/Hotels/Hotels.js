import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Logo2 from "../../images/Logo2.png";
import { TravelContext } from "../../App";
import { aboutHotels } from "../../FakeData/AboutHotels";
import HotelDetails from "../HotelDetails/HotelDetails";
import GoogleMap from "../GoogleMap/GoogleMap";

const Hotels = () => {
  const [destination] = useContext(TravelContext);

  return (
    <div>
      <Navbar color="black" image={Logo2} />

      <div
        className="container row"
        style={{ marginTop: "50px", marginLeft: "120px" }}
      >
        <div className="col-md-6">
          <small>252 stays from Sep 20-25 with 3 guests</small>
          <h4>Stay in {destination.name}</h4>
          {aboutHotels.map((hotel) => {
            return <HotelDetails hotel={hotel} />;
          })}
        </div>

        <div className="col-md-6">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Hotels;
