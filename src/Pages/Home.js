import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import LaptopSvg from "../assets/laptop.svg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi there, My Name is Timmy</h2>
        <div className="prompt">
          <p>Check out my history: </p>

          <div className="intro-section">
            <div classname="intro-svg">
              <img
                src={LaptopSvg}
                style={{ height: 100, width: 100 }}
                alt="website logo"
              />
            </div>
            <ul className="intro-list">
              <li>
                2 years of experience in web technologies and user interface
                development, experienced in HTML5, DOM, CSS3, Bootstrap,
                JavaScript, TypeScript, jQuery, React, Node.js, Redux, Express,
                Webpack, AJAX, JSON.
              </li>
              <li>
                Experienced in implementing React component lifecycle
                architecture and Redux store actions, utilizing socket.io in
                React Redux application for real time data handling and React
                Router, Redux Thunk in React for API calls.
              </li>
              <li>
                Experienced in implementing Node.js for data storage and
                retrieval in MongoDB by utilizing Mongoose framework.
              </li>
              <li>
                Experienced in front-end unit testing, including Jest, Enzyme.
              </li>
              <li>
                Experienced in implementing enterprise applications with a full
                Agile,Scrum development lifecycle.
              </li>
              <li>
                Hands-on experiences in RESTful web services,using
                JavaScript,jQuery and React.
              </li>
              <li>
                Experienced in version control tool utilizations such as GIT.
              </li>
              <li>
                Excellent goal-oriented and motivated team player, fast learner
                and self-starter with strong communication skill.
              </li>
            </ul>
          </div>
          {/* <LinkedInIcon /> */}
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, SCSS, NPM, Ionic, BootStrap,
              MaterialUI, Yarn, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              ExpressJS, Java Spring Boot, GraphQL, MySQL, MongoDB, AWS S3
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
