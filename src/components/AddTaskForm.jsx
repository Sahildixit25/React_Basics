import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";

const AddTaskForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    dispatch(addTask({ id: Date.now(), title: task, completed: false }));
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a task..." />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;
