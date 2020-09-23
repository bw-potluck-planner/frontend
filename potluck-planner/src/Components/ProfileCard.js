import React from "react";



const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <div>
        <p>Role: {profile.role}</p>
        <p>Contact: {profile.contact}</p>
        <p>{profile.confirmation === 0 ? "Not Attending" : "Attending"}</p>
      </div>
      
      
    </div>
  );
};

export default ProfileCard;
