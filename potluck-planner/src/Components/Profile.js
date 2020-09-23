import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deletePotluck, fetchData } from "../actions/actions";
import ProfileCard from "./ProfileCard";
import EventBody from "./Events/EventBody";
import { useHistory } from "react-router-dom";

const eventData = {
  name: "",
  date: "",
  location: "",
  dish: "",
  description: "",
  allergyalert: false,
  email: "",
};

const Profile = (props) => {
  const [visable, setVisable] = useState(false);
  const [event, setEvent] = useState(eventData);
  const { fetchData } = props;
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  const add = (e) => {
    e.preventDefault();
    history.push("/add-event");
  };

 

  return (
    <div>
      {props.profile.map((profile) => {
        console.log(profile);
        return <ProfileCard key={profile.id} profile={profile} />;
      })}
      <div>
        <EventBody />
      </div>
      <button className="addEventBtn" onClick={add}>
        Add Event
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps, { fetchData })(Profile);
