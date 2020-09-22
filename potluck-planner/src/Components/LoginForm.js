import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { useHistory } from "react-router";

const blankData = {
  username: "",
  password: "",
};

export default function Form() {
  const [userData, setUserData] = useState(blankData);
  // const [userList, setUserList] = useState([]);
  let history = useHistory();

  const change = (evt) => {
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
  };

  const submit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", userData)
      .then((res) => {
       localStorage.setItem("token", res.data.token)
       history.push("/protected")
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUserData(blankData)
      })
    
  };

  // const addUser = () => {
  //   setUserList([...userList, userData]);
  // };

  // useEffect(() => {
    
  // }, [userList]);

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
