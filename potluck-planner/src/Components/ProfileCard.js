import React from "react";
import PotLuck from "./PotLuck";

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <div>
        <p>{profile.role}</p>
        <p>{profile.contact}</p>
        <p>{profile.confirmation === 0 ? "not attending" : "attending"}</p>
      </div>
      <PotLuck/>
    </div>
  );
};

export default ProfileCard;
