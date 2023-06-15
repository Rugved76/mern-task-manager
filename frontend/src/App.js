import TaskList from "./components/TaskList";
// import './app.css'

export const URL = `https://tb-bgsh.onrender.com`; 

function App() {
  return (
    <div className="app">
      <div className=" task-container">
        <TaskList />
      </div>
    </div>
  );
}
//i
export default App;
