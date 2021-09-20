import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Reminder to wash the towels.",
      day: "September 19",
      reminder: true,
    },
    {
      id: 2,
      text: "Reminder to drink more Mountain Dew.",
      day: "September 20",
      reminder: true,
    },
    {
      id: 3,
      text: "Reminder to dirnk less Mountain Dew on Tuesdays.",
      day: "March 24",
      reminder: true,
    },
  ]);
  //
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}
export default App;
