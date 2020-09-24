import React, {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";


export default function Header() {
 
  let history = useHistory();

  
  return (
    <>
      <header className="head">
        <h1 onClick={() => history.push("/")}>Potluck Planner</h1>
        <nav>
          {localStorage.getItem("token") === null ? <Link to="/login">Log-In</Link> : <Link to="/protected">Profile</Link>}
          
          {localStorage.getItem("token") === null ? <Link to="/register">Register</Link> : <Link to="/login">Logout</Link>}
        </nav>
      </header>
    </>
  );
}
