import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import "./App.css";

import Login from "./Components/LoginForm";
import Header from "./Components/Header";
import Register from "./Components/RegisterForm";
import Main from "./Components/Mainbody";

import PrivateRoute from "./Components/PrivateRoute";
import Profile from './Components/Profile';



function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute exact path='/protected' component={Profile}/>
        <Route path='/login' component={Login}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
