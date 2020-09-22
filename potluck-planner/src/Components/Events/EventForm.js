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
    setUserData({ ...eventData, [name]: toChange });
  };

  const submit = (evt) => {
    evt.preventDefault();
    addUser();
    setUserData(blankData);
    console.log("UserData", userData);
    console.log("UserList", userList);
  };

  const addUser = () => {
    setUserList([...userList, userData]);
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
      <div className="loginBox">
        <div className="mainForm">
          <h2>Event Form</h2>
          <form onSubmit={submit}>
            <div className="item">
              <input
                type="text"
                name="Name"
                placeholder="Event Name"
                value={userData.Name}
                onChange={change}
              />
            </div>
            <div className="item">
              <input
                type="text"
                name="Date"
                placeholder="Date"
                value={userData.Date}
                onChange={change}
              />
            </div>
            <div className="item">
              <input
                type="text"
                name="Location"
                placeholder="Location"
                value={userData.Location}
                onChange={change}
              />
            </div>
            <div className="item">
              <input
                type="text"
                name="Dish Name"
                placeholder="Dish Name"
                value={userData["Dish Name"]}
                onChange={change}
              />
            </div>
            <div className="item">
              <input
                type="text"
                name="Description"
                placeholder="Description"
                value={userData.Description}
                onChange={change}
              />
            </div>
            <div className="item">
              <input
                type="checkbox"
                name="AllergyAlert"
                value={userData.AllergyAlert}
                onChange={change}
              />
            </div>
            <div className="item">
              <input
                type="text"
                name="Email"
                placeholder="Email Contact"
                value={userData.Email}
                onChange={change}
              />
            </div>
            <div className="itemSub">
              <button id="subutton">Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
