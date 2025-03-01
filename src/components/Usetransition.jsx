import React, { useDeferredValue, useState, useTransition } from 'react'

const Usetransition = () => {
    const [text, setText] = useState("");
    const [text1, setText1] = useState("");
    const [list, setList] = useState([]);
    const [isPending, startTransition] = useTransition();

    function ExpensiveList({ input }) {
        const deferredInput = useDeferredValue(input); // Defers rendering
        return <p>{deferredInput}</p>;
      }
  
    function handleChange(e) {
      setText(e.target.value);
  
      // Make the expensive update low-priority
      startTransition(() => {
        setList(Array(10000).fill(e.target.value)); // Expensive operation
      });
    }
  
    return (
      <>
        {/* <input type="text" value={text} onChange={handleChange} />
        {isPending ? <p>Loading...</p> : list.map((item, i) => <p key={i}>{item}</p>)} */}



        <input type="text" onChange={(e) => setText1(e.target.value)} />
      <ExpensiveList input={text1} />
      </>
    );
}

export default Usetransition