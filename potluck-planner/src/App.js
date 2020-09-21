import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import "./App.css";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from './Components/Profile';


import Login from "./Components/LoginForm";


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>Profile</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <PrivateRoute exact path='/protected' component={Profile}/>
        <Route path='/login' component={Login}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
