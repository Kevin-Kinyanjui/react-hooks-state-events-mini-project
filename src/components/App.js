import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  let tasks = TASKS;
  const [list, setList] = useState(tasks);
  const [deletedList, setDeleted] = useState(tasks);

  const categories = CATEGORIES;

  function deleted(task) {
    setList((lastValue) => lastValue.filter((taskId) => taskId !== task));
    setDeleted((lastValue) => lastValue.filter((taskId) => taskId !== task));
  }

  function selected(category) {
    categories.map((cat) => {
      cat !== category
        ? document.querySelector(`.${cat}`).classList.remove("selected")
        : document.querySelector(`.${category}`).classList.add("selected");
      setList(() =>
        deletedList.filter((task) =>
          category === "All" ? true : task.category === category
        )
      );
    });
  }

  function onTaskFormSubmit(newObj) {
    setList((lastValue) => {
      setDeleted((lastValue) => [...lastValue, newObj]);
      return [...lastValue, newObj];
    });
    return newObj;
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} click={selected} />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={list} click={deleted} />
    </div>
  );
}

export default App;
