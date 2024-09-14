import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallBackEx = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodo((t) => [...t, "New Todo"]);
  }, [todo]);

  return (
    <div>
      <h2>UseCallBack</h2>
      <h4>My todos</h4>
      <p>{count}</p>
      <button onClick={addCount}>Add Count</button>
      <Todos todo={todo} addTodo={addTodo} />
    </div>
  );
};

export default UseCallBackEx;
