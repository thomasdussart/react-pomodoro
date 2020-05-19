import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function SessionLength(props) {
  function increaseSession() {
    if (props.sessionLength === 60) {
      return;
    }
    props.increaseSession();
  }
  function decreaseSession() {
    if (props.sessionLength === 1) {
      return;
    }
    props.decreaseSession();
  }
  return (
    <section id="session">
      <h4>Pomodoro Length</h4>
      <section className="interval-container">
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={decreaseSession}
        >
          <FaArrowDown className="icon" />
        </button>

        <p className="interval-length">{props.sessionLength}</p>
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={increaseSession}
        >
          <FaArrowUp className="icon" />
        </button>
      </section>
    </section>
  );
}

export default SessionLength;
