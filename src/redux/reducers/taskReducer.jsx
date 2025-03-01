const initialState = {
    tasks: [],
    loading: false,
    error: null,
    table: []
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_TASKS_REQUEST":
        return { ...state, loading: true };
      case "FETCH_TASKS_SUCCESS":
        return { ...state, loading: false, tasks: action.payload };
      case "FETCH_TASKS_FAILURE":
        return { ...state, loading: false, error: action.error };
        case "FETCH_TABLE_REQUEST":
        return { ...state, loading: true };
      case "FETCH_TABLE_SUCCESS":
        return { ...state, loading: false, table: action.payload };
      case "FETCH_TABLE_FAILURE":
        return { ...state, loading: false, error: action.error };
      case "ADD_TASK":
        return { ...state, tasks: [...state.tasks, action.payload] };
      case "TOGGLE_TASK":
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
          ),
        };
      case "DELETE_TASK":
        return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  