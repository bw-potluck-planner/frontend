import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"

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
    axiosWithAuth()
      .get("/api/auth/login")
      .then((res) => {
        console.log(res);
        setUserList(...userList, res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userList]);

  return (
    <>
      <div className="loginBox">
        <div className="mainForm">
          <h2>Begin Planning</h2>
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
            <div className="itemSub">
              <button id="subutton">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
