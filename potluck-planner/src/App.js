import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Login from "./Components/Login-Register/LoginForm";
import Header from "./Components/Header";
import Register from "./Components/Login-Register/RegisterForm";
import Main from "./Components/Mainbody";
import Profile from "./Components/Profile";

import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Switch>
          <PrivateRoute path="/protected" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </>
  );
}

export default App;
