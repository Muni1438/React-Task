import React, { useContext } from "react";
import './Testing.css'
import useOwnState from "./useOwnState";
import { userContext } from "./Task";
function Testing() {
  const OwnState = useContext(userContext);
  const [state, setstate, Errors, Notification] = OwnState(0);
  const develop = () => {
    Notification(`Updated State Value : ${state}`);
  };
  const check = () => {
    Errors("Something Wrong");
  };
  return (
    <div className="main_div">
      <button className="main_btn" onClick={() => setstate((prev) => prev + 1)}>Count</button>
      <h2>{state} </h2>
      <button className="main_btn" onClick={develop}>Notification</button>
      <button className="main_err" onClick={check}>Error</button>
    </div>
  );
}

export default Testing;
