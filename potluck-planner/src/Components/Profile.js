import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deletePotluck, fetchData } from "../actions/actions";
import ProfileCard from "./ProfileCard";
import EventForm from "./Events/EventForm";
import {useHistory} from "react-router-dom"



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
  const [event, setEvent] = useState(eventData)
  const { fetchData } = props;
  const history = useHistory()

  useEffect(() => {
    fetchData();
  }, []);

  const edit = e => {
    e.preventDefault();
    history.push(`/edit-event/${event.id}`)
}

const deleteEvent = (e) => {
  e.preventDefault()
  deletePotluck(event.id)
  history.push("/protected")
 
}

  return (
    <div>
      {props.profile.map((profile) => {
        console.log(profile);
        return <ProfileCard key={profile.id} profile={profile} />;
      })}

      <button
        className="addEventBtn"
        onClick={() => {
          setVisable(!visable);
        }}
      >
        Add Event
      </button>
      {!visable ? "" : <EventForm />}

      <button
        className="editEventBtn"
        onClick={edit}
      >
        Edit Event
      </button>
      <button className="deletebutton" onClick={deleteEvent}>Delete Event</button>
      
      
    </div>
  );
};

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps, { fetchData })(Profile);
