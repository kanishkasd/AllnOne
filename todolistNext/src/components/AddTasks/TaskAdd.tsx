import React, { useState } from "react";
import styles from "./page.module.css";
import { Roboto } from "next/font/google";

const TaskAdd = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleClick = () => {
    if (task.trim() !== "") {
      setTasks([...tasks]);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Type your task here...."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={(e) => handleClick} className={styles.button}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default TaskAdd;
