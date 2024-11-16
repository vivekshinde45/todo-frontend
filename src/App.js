import Task from "./components/Task";
import TaskList from "./components/TaskList";

export default function App(){
  return(
    <div style={{backgroundColor:"gray"}}>
      <Task/>
      <TaskList />
    </div>
  )
}