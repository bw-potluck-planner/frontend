import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Header() {
  let history = useHistory();
  const marketing1 = `https://eat-plan-potluck.netlify.app/`;
  const marketing2 = `https://potluck-paradise.netlify.app/`;

  const arrayOfMark = [marketing1, marketing2];

  const marketing = arrayOfMark[Math.floor(Math.random() * arrayOfMark.length)];

  return (
    <>
      <header className="head">
        <h1 onClick={() => history.push("/")}>Potluck Planner</h1>
        <nav>
          {localStorage.getItem("token") === null ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link to="/protected">Profile</Link>
          )}

          {localStorage.getItem("token") === null ? (
            <Link to="/register">Register</Link>
          ) : (
            <Link to="/login">Logout</Link>
          )}
          <a href={marketing}>Marketing</a>
        </nav>
      </header>
    </>
  );
}
