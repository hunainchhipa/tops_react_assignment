import React from "react";
import { useState } from "react";

export default function Inc_Dec() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="wrapper">
        <h1>{count}</h1>
        <button id="incBtn" className="btn btn-primary" onClick={decrement}>
          Decrement
        </button>
        <button id="incBtn" className="btn btn-primary" onClick={increment}>
          Increment
        </button>
        <div>
          <button className="btn btn-primary" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
