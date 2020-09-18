import React, { useContext } from "react";
import { TravelContext } from "../../App";
import { Link } from "react-router-dom";
import { travelDestinations } from "../../FakeData/TravelDestinations";
import SingleDestination from "../SingleDestination/SingleDestination";

const Destinations = () => {
  const [destination] = useContext(TravelContext);

  return (
    <div
      className="container row text-light mt-5"
      style={{ marginLeft: "120px", paddingTop: "100px" }}
    >
      <div className="col-md-4 mt-5">
        <h1>{destination.name}</h1>
        <small>{destination.details.substring(0, 200)}..</small>
        <br />
        <Link to="/booking">
          <button className="btn btn-warning mt-3">Booking →</button>
        </Link>
      </div>

      <div className="col-md-8">
        {travelDestinations.map((destination) => {
          return (
            <SingleDestination destination={destination}></SingleDestination>
          );
        })}
      </div>
    </div>
  );
};

export default Destinations;
