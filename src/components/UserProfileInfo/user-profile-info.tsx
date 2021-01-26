import React from "react";
import emailSvg from "../../images/email.svg";
import phoneSvg from "../../images/phone.svg";
import twitterSvg from "../../images/twitter.svg";
import { LinkedInInfo } from "../../models/linkedin-info";
import "./user-profile-info.scss";

const UserProfileInfo = (linkedinInfo: LinkedInInfo) => {
  return (
    <div className="UerProfileInfo">
      <div className="UserProfileSpace">
        <div className="UserProfileAvatar">
          <div
            style={{
              background: "url(" + linkedinInfo.image + ")",
              backgroundSize: "115px",
              position: "relative",
              width: "113px",
              height: "113px",
              borderRadius: "50%"
            }}>
            <div className="inner_circle"></div>
          </div>
        </div>
        <div className="UserProfileText">
          <p className="UserHeaderText">{linkedinInfo.name}</p>
          <p className="UserSkill">{linkedinInfo.position?.substring(0, 45)}</p>
          <p className="UserPosition">{linkedinInfo.address}</p>
          <span className="UserYear">{linkedinInfo.parsedResume.experienceDuration} of experience</span>
        </div>
      </div>
      <div className="ProfileInfo">
        {linkedinInfo.contactInfo?.emailAddress ? (
          <p className="ProfileInfo1">
            <span>{linkedinInfo.contactInfo.emailAddress}</span>
            <img src={emailSvg} alt="avatar" />
          </p>
        ) : null}
        {linkedinInfo.contactInfo?.phoneNumbers && linkedinInfo.contactInfo?.phoneNumbers[0]?.number ? (
          <p className="ProfileInfo1">
            <span>{linkedinInfo.contactInfo.phoneNumbers[0]?.number}</span>
            <img src={phoneSvg} alt="phone number" />
          </p>
        ) : null}
        {linkedinInfo.contactInfo?.twitterHandles && linkedinInfo.contactInfo?.twitterHandles[0]?.name ? (
          <p className="ProfileInfo1">
            <span>{linkedinInfo.contactInfo.twitterHandles[0]?.name}</span>
            <img className="twitter_img" src={twitterSvg} alt="twitter" />
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default UserProfileInfo;
