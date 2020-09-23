import React from "react";
import PotLuck from "./PotLuck";
import EventForm from './Events/EventForm'

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <div>
        <p>Role: {profile.role}</p>
        <p>Contact: {profile.contact}</p>
        <p>{profile.confirmation === 0 ? "Not Attending" : "Attending"}</p>
      </div>
      <PotLuck />
      
    </div>
  );
};

export default ProfileCard;
