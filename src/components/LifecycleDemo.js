import React, { useEffect, useState } from "react";

const LifecycleDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log('Component mounted or updated');

    // Mimic componentWillUnmount (cleanup function)
    return () => {
      console.log('Component will unmount or cleanup before next update');
    };
  },[count])
  return (
    <div>
      <h2>Life cycle demo</h2>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Add +</button>
    </div>
  );
};

export default LifecycleDemo;
