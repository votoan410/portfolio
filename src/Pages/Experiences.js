import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <>
      <VerticalTimeline lineColor="rgb(68, 183, 221)">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Houston Baptist(Christian) University, Houston, Texas US
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree of Computer Science
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer at EPIC CENTER
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Houston, Tx</h4>
          <p>
            • Developed, and assisted to re-design the web application by using
            the HTML5, CSS3, Bootstrap, JavaScript, and jquery.
          </p>{" "}
          <p>
            • Utilized Sass preprocessor to make CSS development more efficient
            and create more efficient stylesheets.
          </p>{" "}
          <p>
            • Used JIRA for bug tracking, issue tracking and task/story
            management
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Client: Houston CrimeStopper
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Houston, Tx</h4>
          <p>
            • Worked on internal backend applications using Node.js and involved
            in the Construction of UI using HTML5, SASS, JavaScript, React, and
            Bootstrap.
          </p>{" "}
          <p>
            • Used React Rechart to build chart that generate chart based on
            user-supplied crime statistic, crime trends, and crime data.
          </p>{" "}
          <p>• Used GIT for version control for project management.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Houston, Tx</h4>
          <p>
            • Worked with React and utilized props, state, keys, refs, events,
            default props, and propTypes to build React components.
          </p>{" "}
          <p>
            • Build python script that automates the process of file retrieval
            from AWS S3 bucket.
          </p>{" "}
          <p>• Utilized Docker and Docker-compose to set up task automation.</p>
          <p>
            • Worked in an Agile environment with active scrum participation.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default Experience;
