import React from "react";
import { Link } from "react-router-dom";
import "./Navigate.css";
function Navigate() {
  return (
    <div className="main_div">
      <nav className="main_nav">
        <Link to="/task1" className="nav_link1">
          Task1
        </Link>
        <Link to="/task2" className="nav_link1">
          Task2
        </Link>
      </nav>
    </div>
  );
}

export default Navigate;
