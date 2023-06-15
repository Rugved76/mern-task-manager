import TaskList from "./components/TaskList";
import './app.css'

export const URL = `http://localhost:8000`;

function App() {
  return (
    <div className="app">
      <div className=" task-container">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
