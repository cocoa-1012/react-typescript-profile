import React from "react";
import { LinkedInInfo } from "../../models/linkedin-info";
import ProfileTerm from "../ProfileTerm/index";
import RadarCharts from "../RadarCharts";
import UserProfileInfo from "../UserProfileInfo/user-profile-info";
import "./UserProfile.scss";

const UserProfile = (linkedInInfo: LinkedInInfo) => {
  return (
    <>
      <UserProfileInfo {...linkedInInfo} />
      <ProfileTerm {...linkedInInfo} />
      <RadarCharts {...linkedInInfo.parsedResume} />
    </>
  );
};

export default UserProfile;
