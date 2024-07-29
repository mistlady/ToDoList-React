import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "eat breakfast",
    "read a book",
    "walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  // Function to add a new task
  function addTask() {
    // Check if the newTask is not empty or just whitespace
    if (newTask.trim() !== "") {
      // Update the tasks state by adding the newTask to the list
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask(""); // Clear the input field
    }
  }
  // Function to remove a task
  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    //or use this : setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  // Function to update a task
  function updateTask(index) {
    // Prompt the user to enter a new task description
    const updatedTask = prompt("Update the task:", tasks[index]);

    // Check if the user entered a new task description
    if (updatedTask) {
      // Create a copy of the current tasks list
      const newTasks = [...tasks];

      // Update the task at the specified index with the new task description
      newTasks[index] = updatedTask;

      // Update the tasks state with the new tasks list
      setTasks(newTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          className="border-solid border-2 p-2"
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="border-solid border-2 border-green-500 p-2"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button
              className="border-solid border-2 border-red-500"
              onClick={() => removeTask(index)}
            >
              Delete
            </button>
            <button
              className="border-solid border-2 border-blue-500"
              onClick={() => updateTask(index)}
            >
              Update
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
