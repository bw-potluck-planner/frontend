import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { useHistory } from "react-router";


const blankData = {
  username: "",
  password: "",
  role: "",
};

export default function Register() {
  const [userData, setUserData] = useState(blankData);
  //const [userList, setUserList] = useState([]);
  let history = useHistory();

  const change = (evt) => {
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
  };

  const submit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", userData)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        console.log(res.data.token)
        history.push("/protected")
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUserData(blankData)
      })
    // addUser();
    // setUserData(blankData);
    console.log("UserData", userData);
    
  };

  // const addUser = () => {
  //   setUserList([...userList, userData]);
  // };

  // useEffect(() => {
    
  // }, []);

  return (
    <>
      <div className="loginBox">
        <div className="mainForm">
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
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={userData.role}
                onChange={change}
              />
            </div>
            <div className="itemSub">
              <button id="subutton">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
