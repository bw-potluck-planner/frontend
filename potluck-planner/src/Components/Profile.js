import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/actions";
import ProfileCard from "./ProfileCard";
import EventForm from "./Events/EventForm";

const Profile = (props) => {
  const [visable, setVisable] = useState(false);
  const { fetchData } = props;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
<<<<<<< HEAD
        {props.profile.map(profile => {
            console.log(profile)
            return(
                <ProfileCard key={profile.id} profile={profile} /> 
            )
        })}
        <p>Profile</p>
=======
      {props.profile.map((profile) => {
        console.log(profile);
        return <ProfileCard key={profile.id} profile={profile} />;
      })}

      <button
        onClick={() => {
          setVisable(!visable);
        }}
      >
        Add Event
      </button>
      {!visable ? "" : <EventForm />}
>>>>>>> 6d9b582f53af050384b65f2243105b2dfe65bc03
    </div>
  );
};

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps, { fetchData })(Profile);
