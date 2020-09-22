import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Login from "./Components/LoginForm";
import Header from "./Components/Header";
import Register from "./Components/RegisterForm";
import Main from "./Components/Mainbody";
import Profile from "./Components/Profile";

import PrivateRoute from "./Components/PrivateRoute";


function App() {

  
  return (
    <>
      <Header />
        <div className="App">
        <Switch>
          <PrivateRoute path="/protected" component={Profile}/>
         

          {/* <Route path="/protected" component={Profile} /> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
        </Switch>
        <Main/>
      </div>
      </>
  )
}



export default App;
