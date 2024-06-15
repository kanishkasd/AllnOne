import React from "react";
import styles from "./page.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const TaskAdd = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Type your task here...."
        />
        <button className={styles.button}>ADD</button>
      </form>
    </div>
  );
};

export default TaskAdd;
