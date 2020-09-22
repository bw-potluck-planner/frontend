import React from "react";

const ProfileCard = ({profile}) => {
    return(
        <div className="profile-card">
            <h2>{profile.name}</h2>
            <div>
                <p>{profile.role}</p>
                <p>{profile.contact}</p>
                <p>{profile.confirmation === 0 ? "not attending" : "attending"}</p>
            </div>
            <p>Profile Card</p>
        </div>
    )
}

export default ProfileCard