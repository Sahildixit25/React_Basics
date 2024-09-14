import React from 'react'

const Todos = ({todo , addTodo}) => {
  return (
    <div>
        <h4>My todos</h4>
        {todo.map((todo,index) => {
            return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default Todos