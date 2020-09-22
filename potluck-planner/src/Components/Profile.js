import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/actions"
import ProfileCard from "./ProfileCard";

const Profile = (props) => {

useEffect(() => {
 fetchData()
}, [fetchData])

return(
    <div>
        {props.profile.map(profile => {
            return(
                <ProfileCard key={profile.id} profile={profile} />
            )
        })}
    </div>
)
}

function mapStateToProps(state){
    return{
        profile: state.profile
    }
}

export default connect(mapStateToProps, { fetchData })(Profile)