const ShowTasks = ({ tasks, visibility, updateTaskStatus }) => {
  const filteredTasks = tasks.filter((task) => {
    if (visibility === "running") {
      return !task.isCompleted;
    } else if (visibility === "completed") {
      return task.isCompleted;
    }
    return true;
  });

  return (
    <div>
      {tasks.length > 0 ? (
        <div>
          <h1>List of Tasks</h1>
          <ul>
            {filteredTasks.map((task) => (
              <li key={task.id}>
                {task.name}{" "}
                <button onClick={()=> updateTaskStatus(task.id)}>{task.isCompleted ? "COMPLETED" : "RUNNING"}</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ShowTasks;
