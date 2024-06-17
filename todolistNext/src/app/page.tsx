import TaskAdd from "@/components/AddTasks/TaskAdd";
import styles from "./page.module.css";
export default function Home() {
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Just do it.|</h1>
      <TaskAdd handleClick={handleClick} />
    </div>
  );
}
