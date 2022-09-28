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
    <div className="experience">
      <VerticalTimeline lineColor="rgb(68, 183, 221)">
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Houston Baptist(Christian) University, Houston, Texas US
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Houston, Tx</h4>
          <p>Lorem Isum</p> <p>Lorem Isum.</p> <p>Lorem Isum</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Houston, Tx</h4>
          <p>Lorem Isum</p> <p>Lorem Isum.</p> <p>Lorem Isum</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Houston, Tx</h4>
          <p>Lorem Isum</p> <p>Lorem Isum.</p> <p>Lorem Isum</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Houston, Tx</h4>
          <p>Lorem Isum</p> <p>Lorem Isum.</p> <p>Lorem Isum</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Houston, Tx</h4>
          <p>Lorem Isum</p> <p>Lorem Isum.</p> <p>Lorem Isum</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
