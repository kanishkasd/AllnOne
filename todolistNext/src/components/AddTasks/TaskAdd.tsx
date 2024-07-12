import React from "react";
import styles from "./page.module.css";

const TaskAdd = () => {
  return (
    <div className={styles.container}>
      <form>
        <label htmlFor="addTasks" className={styles.heading}>
          What you want to do today ?{" "}
        </label>
        <input
          type="text"
          id="addTasks"
          placeholder="Add your task"
          className={styles.input}
        />
      </form>
    </div>
  );
};

export default TaskAdd;
