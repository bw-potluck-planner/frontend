import React, { useState, useEffect } from "react";
import axios from "../../../node_modules/axios";

const blankData = {
  username: "",
  password: "",
};

export default function Form() {
  const [userData, setUserData] = useState(blankData);
  const [userList, setUserList] = useState([]);

  const change = (evt) => {
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
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
      <div className="main">
        <h2>Sign up!</h2>
        <form onSubmit={submit}>
          <div className="item">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={userData.username}
              onChange={change}
            />
          </div>
          <div className="item">
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={change}
            />
          </div>
          <div className="item">
            <button id="subutton">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
