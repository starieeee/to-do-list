// Form.js
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, tasks, setTasks, editTask, setEditTask }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!editTask) {
      // Adding a new task
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          title: input,
          completed: false,
        },
      ]);
    } else {
      // Updating an existing task
      const updatedTasks = tasks.map((task) =>
        task.id === editTask.id ? { ...task, title: input } : task
      );
      setTasks(updatedTasks);
      setEditTask(null);
    }

    // Resetting the input field
    setInput("");
  };

  useEffect(() => {
    if (editTask) {
      setInput(editTask.title);
    } else {
      setInput("");
    }
  }, [setInput, editTask]);

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="What is your 2024 goal..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTask ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
