export const fetchTasks = () => async (dispatch) => {
    dispatch({ type: "FETCH_TASKS_REQUEST" });
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
      const data = await response.json();
      dispatch({ type: "FETCH_TASKS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_TASKS_FAILURE", error });
    }
  };

  export const fetchTableData = () => async (dispatch) => {
    dispatch({ type: "FETCH_TABLE_REQUEST" });
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      dispatch({ type: "FETCH_TABLE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_TABLE_FAILURE", error });
    }
  };
  
  export const addTask = (task) => ({ type: "ADD_TASK", payload: task });
  
  export const toggleTask = (taskId) => ({ type: "TOGGLE_TASK", payload: taskId });
  
  export const deleteTask = (taskId) => ({ type: "DELETE_TASK", payload: taskId });
  