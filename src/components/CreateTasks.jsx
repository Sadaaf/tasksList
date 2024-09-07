import { useState } from "react";

const CreateTasks = ({ addNewTask }) => {
  const [task, setTask] = useState("");
  const handleChange = (event) => setTask(event.target.value);
  const handleClick = () => {
    if (task) {
      addNewTask(task);
      setTask("");
    } else {
      alert("Please enter a value for adding task");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the task"
        value={task}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Create Task</button>
    </div>
  );
};

export default CreateTasks;
