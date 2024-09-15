import React, { useState } from "react";

const Testing = ({initialCount}) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const restart = () => {
    setCount(0);
  };

  const switchin = () => {
    setCount((c) => c * -1);
  };

  return (
    <div>
      <h2>Count:</h2>
      <p data-testid="count">{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={restart}>reset</button>
      <button onClick={switchin}>switch sign</button>
    </div>
  );
};

export default Testing;
