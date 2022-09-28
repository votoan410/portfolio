import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

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
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experiences </Link>
      </div>
    </div>
  );
}

export default Navbar;
