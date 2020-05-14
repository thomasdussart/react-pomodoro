import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function BreakInterval(props) {
  function decreaseCounter() {
    if (props.breakInterval === 1) {
      return;
    }
    props.decreaseBreak();
  }

  function increaseCounter() {
    if (props.breakInterval === 60) {
      return;
    }
    props.increaseBreak();
  }
  return (
    <section>
      <h4>Break Length</h4>
      <section className="interval-container">
        <button
          className="button-break"
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={decreaseCounter}
        >
          <FaArrowDown className="icon" />
        </button>
        <p className="interval-length">{props.breakInterval}</p>
        <button
          className="button-break"
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={increaseCounter}
        >
          <FaArrowUp className="icon" />
        </button>
      </section>
    </section>
  );
}

export default BreakInterval;
