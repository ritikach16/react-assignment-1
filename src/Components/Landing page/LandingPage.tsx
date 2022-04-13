import React, { ChangeEvent, FC, useState } from "react";
import "./LandingPage.css";
import { addableTask } from "../Interfaces/Interface";
import TodoTask from "../TodoTasks/TodoTask";

const LandingPage: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<addableTask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // console.log(event.target.name);
    if (event.target.name === "task"){
      setTask(event.target.value);
    }
    else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <>
      <div className="mainContainer">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Tasks"
            name="task"
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            onChange={handleChange}
            placeholder="DeadLine For the task"
          />
        </div>
        <button className="addTask" onClick={addTask}>Add Task</button>
        <div className="todoList">
          {todoList.map((task: addableTask, key: number) => {
            return (
              <TodoTask key={key} task={task} completeTask={completeTask} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
