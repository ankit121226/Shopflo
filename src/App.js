import { useContext } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import DiaplayTask from "./components/DiaplayTask";
import TaskList from "./components/TaskList";
import { useTaskContext } from "./context";
function App() {
  const  {value}  = useTaskContext();
  const {state} = value
  return (
      <div className="App">
        <div className="container">
          <div className="leftContainer">
            <DiaplayTask />
            <TaskList />
          </div>
          {state.isCreativeCreationSectionVisible && (
            <div className="rigthContainer">
            <CreateTask />
          </div>
          ) }
          
        </div>
      </div>
  );
}

export default App;
