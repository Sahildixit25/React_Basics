import React from 'react'
import useFetch from '../commonMethods/useFetch';

const CustomHooks = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
      <>
      <h2>Custom Hooks</h2>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </>
    );  
}

export default CustomHooks