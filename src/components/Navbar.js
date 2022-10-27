import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import WorkIcon from "@material-ui/icons/Work";

function Navbar() {
  // control the state open and close of the icon
  const [expandNavBar, setExpandNavbar] = useState(false);

  // close navbar whenever we change the page
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>

      <div className="links">
        <Link to="/portfolio"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experiences </Link>
        <Link to="/Contact">
          Contact Me <WorkIcon />{" "}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
