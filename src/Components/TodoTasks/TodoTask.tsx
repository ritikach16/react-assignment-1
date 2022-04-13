import React from "react";
import "./TodoTasks.css";
import { Props } from "../Interfaces/PropsInterface";

const TodoTask = ({ task, completeTask }: Props) => {
  console.log(task);
  
  return (
    <div className="todo-list">
     <div className="content">
        <span>{task.taskName},</span>&nbsp;&nbsp;
        <span>Deadline: {task.deadLine}</span>
      </div>
      <button className="closebtn"
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
