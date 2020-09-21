import React from "react";
import "./App.css";
import Login from "./Components/LoginForm";
import Header from "./Components/Header";
import Register from "./Components/RegisterForm";
import Main from "./Components/Mainbody";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </div>
  );
}

export default App;
