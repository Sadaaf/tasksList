import { useState } from "react";
import CreateTasks from "./CreateTasks";
import shortid from "shortid";
import ShowTasks from "./ShowTasks";
import ChangeVisibility from "./ChangeVisibility";
const Tasks = () => {
  const [visibility, setVisibility] = useState("all");
  const [tasks, setTasks] = useState([]);

  const addNewTask = (taskName) => {
    const task = {
      name: taskName,
      isCompleted: false,
      createdAt: new Date(),
      id: shortid.generate(),
    };
    setTasks([task, ...tasks]);
  };

  const updateVisibility = (option) => {
    setVisibility(option);
  };

  const updateTaskStatus = (id) => {
    const task = tasks.find((task) => task.id === id);
    console.log("the task id is " + task.id + "\n passed in task id is " + id);
    task.isCompleted = !task.isCompleted;
    setTasks([...tasks]);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <CreateTasks addNewTask={addNewTask} />
      <ChangeVisibility
        changeVisibility={updateVisibility}
        visibility={visibility}
      />
      <ShowTasks
        tasks={tasks}
        visibility={visibility}
        updateTaskStatus={updateTaskStatus}
      />
    </div>
  );
};

export default Tasks;
