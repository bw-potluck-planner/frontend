import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router";
import schema from "./logValidate";
import * as yup from "yup";

const blankData = {
  username: "",
  password: "",
};
const errorStrings = {
  username: "",
  password: "",
};

export default function Form() {
  const [userData, setUserData] = useState(blankData);
  const [formErrors, setFormErrors] = useState(errorStrings);
  const [disabled, setDisabled] = useState(false);
  // const [userList, setUserList] = useState([]);
  let history = useHistory();

  const change = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setUserData({ ...userData, [name]: value });
  };

  const submit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", userData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUserData(blankData);
      });
  };

  // const addUser = () => {
  //   setUserList([...userList, userData]);
  // };

  // useEffect(() => {

  // }, [userList]);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };
  useEffect(() => {
    schema.isValid(userData).then((valid) => {
      setDisabled(!valid);
    });
  }, [userData]);

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
            <p className="errorMsg">{formErrors.username}</p>
            <div className="item">
              <input
                type="text"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={change}
              />
            </div>
            <p className="errorMsg">{formErrors.password}</p>
            <div className="itemSub">
              <button id="subutton" disabled={disabled}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
