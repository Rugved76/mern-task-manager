import TaskList from "./components/TaskList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './app.css'

export const URL = `http://localhost:8000`;

function App() {
  return (
    <div className="app">
      <div className=" task-container">
        <TaskList />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
