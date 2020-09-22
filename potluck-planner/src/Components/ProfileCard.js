import React from "react";

const ProfileCard = ({profile}) => {
    return(
        <div className="profile-card">
            <h2>{profile.name}</h2>
            <div>
                <p>{profile.role}</p>
                <p>{profile.contact}</p>
            </div>
        </div>
    )
}

export default ProfileCard