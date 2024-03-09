
import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(initialState);
  const [editTask, setEditTask] = useState(null);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              tasks={tasks}
              setTasks={setTasks}
              editTask={editTask}
              setEditTask={setEditTask}
            />
          </div>
          <div>
            <List tasks={tasks} setTasks={setTasks} setEditTask={setEditTask}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
