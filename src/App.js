import "./App.css";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";

const USER_TYPES = {
  PUBLIC_USER: "Public user",
  NORMAL_USER: "Normal user",
  ADMIN_USER: "Admin user",
};

const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER;

function App() {
  return (
    <div className="App">
      <Header CURRENT_USER_TYPE={CURRENT_USER_TYPE}  />
      <AppRoutes USER_TYPES={USER_TYPES} CURRENT_USER_TYPE={CURRENT_USER_TYPE}  />
    </div>
  );
}

export default App;
