// import "./App.css";
import NavBar from "./components/NavBar";
import DefaultComponent from "./components/DefaultComponent";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <DefaultComponent>{<Outlet />}</DefaultComponent>
    </div>
  );
}

export default App;
