import React from "react";
import bag_icon from "../../images/bag_icon.png";
import education_icon from "../../images/education_icon.png";
import { Experience } from "../../models/experience";
import { LinkedInInfo } from "../../models/linkedin-info";
import AreaChart from "../AreaChart";
import "./index.scss";

const ProfileTerm = (linkedinInfo: LinkedInInfo) => {
  return (
    <div className="ProfileTerm">
      <div className="MainContainer">
        <p className="ExperienceTitle">Experience</p>
        <div className="ExperienceContainer">
          <img className="BagIcon" src={bag_icon} alt="bag" />
          <div className="ExperienceList">
            {linkedinInfo.parsedResume.experiences.map((ex: Experience, index: number) => (
              <div key={index} className="ExperienceItem">
                <span className="DevelopeStyle">{ex.title?.substring(0, 30)}</span>
                <span> at {ex.company?.substring(0, 22)}</span>
                <span>
                  {" "}
                  ({ex.startDate} - {ex.endDate}){" "}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="ExperienceContainer">
          <img className="BagIcon" src={education_icon} alt="education" />
          <div className="ExperienceList">
            <div className="ExperienceItem">
              <span className="DevelopeEducation">{linkedinInfo.parsedResume.degree?.substring(0, 25)}</span>
              <span> at {linkedinInfo.parsedResume.school?.substring(0, 25)}</span>
            </div>
          </div>
        </div>
      </div>
      <AreaChart {...linkedinInfo} />
    </div>
  );
};

export default ProfileTerm;
