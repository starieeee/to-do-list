import React from 'react';
import { FaListCheck } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const List = ({ tasks, setTasks, setEditTask }) => {
  const handlerComplete = (taskToComplete) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskToComplete.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };
  const handlerEdit = ({id}) => {
    const findTask = tasks.find((task) => task.id === id);
    setEditTask(findTask);
  };
  const handlerDelete = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
  };
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li className="list-item" key={task.id}>
            <input
              type="text"
              value={task.title}
              className={`list ${task.completed ? "complete" : ""}`}
              onChange={(event) => {
                // handle change logic here if needed
              }}
            />
            <div>
              <button className="button-complete task-button" onClick = {() => handlerComplete(task)}>
                <FaListCheck />
              </button>
              <button className="button-edit task-button" onClick={() => handlerEdit(task)}>
                <FaRegEdit />
              </button>
              <button className="button-delete task-button" onClick={() => handlerDelete(task)}>
                <MdDeleteForever />
              </button>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
