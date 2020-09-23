import React, { useState, useEffect } from "react";
import axios from "../../../node_modules/axios";

const blankData = {
  Name: "",
  Date: "",
  Location: "",
  "Dish Name": "",
  Description: "",
  AllergyAlert: false,
  Email: "",
};

export default function EventForm() {
  const [eventData, setEventData] = useState(blankData);

  //   useEffect(() => {
  //     axios
  //       .get("")
  //       .then((res) => {
  //         console.log(res);
  //         // setEventData(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  const change = (evt) => {
    const { name, value, checked, type } = evt.target;
    const toChange = type === "checkbox" ? checked : value;
    setEventData({ ...eventData, [name]: toChange });
  };

  const submit = (evt) => {
    evt.preventDefault();
    setEventData(blankData);
  };

  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        console.log(res);
        // setUserList(...userList, res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="eventForm">
        <div className="divH2">
          <h2>Event Form</h2>
        </div>
        <div className="eventFBox">
          <form onSubmit={submit}>
            <div className="eventItem">
              <label>Event Name</label>
              <input
                type="text"
                name="Name"
                value={eventData.Name}
                onChange={change}
              />
            </div>
            <div className="eventItem">
              <label>Date</label>
              <input
                type="text"
                name="Date"
                value={eventData.Date}
                onChange={change}
              />
            </div>
            <div className="eventItem">
              <label>Location</label>
              <input type="text" value={eventData.Location} onChange={change} />
            </div>
            <div className="eventItem">
              <label>Dish Name</label>
              <input
                type="text"
                name="Dish Name"
                value={eventData["Dish Name"]}
                onChange={change}
              />
            </div>
            <div className="eventItem">
              <label>Description</label>
              <input
                type="text"
                name="Description"
                value={eventData.Description}
                onChange={change}
              />
            </div>
            <div className="eventItem">
              <label>Email</label>
              <input
                type="text"
                name="Email"
                value={eventData.Email}
                onChange={change}
              />
            </div>
            <div className="eventItem">
              <label>Allergy Alert</label>
              <input
                type="checkbox"
                name="AllergyAlert"
                value={eventData.AllergyAlert}
                onChange={change}
              />
            </div>
            <div className="eventItemSub">
              <button id="subutton">Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
