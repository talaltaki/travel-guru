import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TravelContext } from "../../App";
import Logo from "../../images/Logo.png";

const Navbar = (props) => {
  const [destination, setDestination, loggedIn, setLoggedIn, name] = useContext(
    TravelContext
  );

  return (
    <div
      className="d-flex align-items-center justify-content-between pt-5"
      style={{
        color: `${props.color}`,
        height: "50px",
      }}
    >
      <div style={{ marginLeft: "100px" }}>
        <Link to="/">
          <img
            src={props.image || Logo}
            alt="Travel Guru"
            className="ml-5"
            style={{ height: "50px" }}
          />
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search your Destination.."
        value="Search your Destination.."
        className="bg-transparent text-light border-0 rounded p-2"
      />

      <div className="d-flex align-items-center mr-5">
        <a
          href="/news"
          className="mr-5"
          style={{ textDecoration: "none", color: `${props.color}` }}
        >
          News
        </a>
        <a
          href="/destination"
          className="mr-5"
          style={{ textDecoration: "none", color: `${props.color}` }}
        >
          Destination
        </a>
        <a
          href="/blog"
          className="mr-5"
          style={{ textDecoration: "none", color: `${props.color}` }}
        >
          Blog
        </a>
        <a
          href="/contact"
          className="mr-5"
          style={{ textDecoration: "none", color: `${props.color}` }}
        >
          Contact
        </a>

        {loggedIn ? (
          <button
            className="btn btn-outline-warning"
            style={{ marginRight: "100px" }}
          >
            {name}
          </button>
        ) : (
          <Link style={{ textDecoration: "none", color: "white" }} to="/login">
            <button
              className="btn btn-warning"
              style={{ marginRight: "100px" }}
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
