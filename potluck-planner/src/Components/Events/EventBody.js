import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPotluck, deletePotluck } from "../../actions/actions";
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

function EventBody(props) {
  const { getPotluck } = props;
  const [event, setEvent] = useState(eventData);
  const history = useHistory()

  useEffect(() => {
    getPotluck();
  }, []);

  const edit = (e) => {
    e.preventDefault();
    history.push(`/edit-event/${event.id}`);
  };

  const deleteEvent = (e) => {
    e.preventDefault();
    deletePotluck(event.id);
    history.push("/protected");
  };

  return (
    <>
      {props.potluck.map((potluck) => {
        return (
          <div className="eventBody">
            <div className="divH2">
              <h2>{potluck.name !== "" ? potluck.name : "Event Name"}</h2>
            </div>
            <div className="infoBox">
              <p>Date: {potluck.date !== "" ? potluck.date : "2000/22/22"}</p>
              <p>
                Location:{" "}
                {potluck.location !== "" ? potluck.location : "Somewhere, OR"}
              </p>
              <p>Items: {potluck.dish !== "" ? potluck.dish : "No Items"}</p>
              <p>
                Description:{" "}
                {potluck.description !== ""
                  ? potluck.description
                  : "Description goes here"}
              </p>
              <p>
                Allergy Alert:{" "}
                {potluck.allergyalert
                  ? "Allergy Warning"
                  : "No Allergy Warning"}
              </p>
              <p>
                Contact: {potluck.email !== "" ? potluck.email : "No Email"}
              </p>
            </div>
            <button className="editEventBtn" onClick={edit}>
              Edit Event
            </button>
            <button className="deletebutton" onClick={deleteEvent}>
              Delete Event
            </button>
          </div>
        );
      })}
    </>
  );
}

function mapStateToProps(state) {
  return {
    potluck: state.potluck,
  };
}

export default connect(mapStateToProps, { getPotluck })(EventBody);
