import React from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  let displayArray = categories
    .filter((cat) => cat !== "All")
    .map((cat, index) => <option key={index}>{cat}</option>);
  return (
    <form
      className="new-task-form"
      onSubmit={function (event) {
        event.preventDefault();
        let newTask = document.getElementsByName("text")[0].value;
        let taskCategory = document.getElementsByName("category")[0].value;
        onTaskFormSubmit({ text: newTask, category: taskCategory });
      }}
      autoComplete="off"
    >
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">{displayArray}</select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
