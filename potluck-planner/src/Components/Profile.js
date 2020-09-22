import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/actions"
import ProfileCard from "./ProfileCard";

const Profile = (props) => {
    const {fetchData} = props

useEffect(() => {
 fetchData()
}, [])

return(
    <div>
        {props.profile.map(profile => {
            console.log(profile)
            return(
                <ProfileCard key={profile.id} profile={profile} />
            )
        })}
        <p>Profile</p>
    </div>
)
}

function mapStateToProps(state){
    return{
        profile: state.profile
    }
}

export default connect(mapStateToProps, { fetchData })(Profile)