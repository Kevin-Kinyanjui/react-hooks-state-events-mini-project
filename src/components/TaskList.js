import React from "react";
import Task from "./Task";

function TaskList({ tasks, click }) {
  const dispayTasks = tasks.map((task, id) => (
    <Task
      key={id}
      task={task}
      text={task.text}
      category={task.category}
      click={click}
    />
  ));
  return <div className="tasks">{dispayTasks}</div>;
}

export default TaskList;
