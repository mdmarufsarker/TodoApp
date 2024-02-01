import { useState } from "react";
import styles from "./CreateTask.module.css";
import { Box } from "@stacklearner/spark-ui";

const CreateTask = ({ addNewTask }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      addNewTask(text);
      setText("");
    } else {
      alert("Please enter a task");
    }
  };
  return (
    <Box className={styles.container} py="2">
      <input
        type="text"
        placeholder="Enter your task"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Create Task</button>
    </Box>
  );
};

export default CreateTask;
