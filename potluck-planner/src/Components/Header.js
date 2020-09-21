import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="head">
        <h1>Potluck Planner</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Log-In</Link>
        </nav>
      </header>
    </>
  );
}
