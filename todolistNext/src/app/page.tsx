import TaskAdd from "@/components/AddTasks/TaskAdd";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Just do it.|</h1>
      <TaskAdd />
    </div>
  );
}
