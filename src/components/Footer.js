import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
      </div> */}
      <p> &copy; 2022 By Timmy </p>
    </footer>
  );
}

export default Footer;
