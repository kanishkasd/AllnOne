import React from "react";
import styles from "./page.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const TaskAdd = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Type your task here...." />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default TaskAdd;
