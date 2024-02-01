import { useState } from "react";
import Layout from "../components/Layout/Layout";
import CreateTask from "../components/CreateTask/CreateTask";
import shortid from "shortid";
import ShowTask from "../components/ShowTask/ShowTask";
import { Box, Grid } from "@stacklearner/spark-ui";
import styles from "./Task.module.css";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState("all");

  const addNewTask = (text) => {
    const task = {
      text,
      isCompleted: false,
      created: Date.now(),
      id: shortid.generate(),
    };
    setTasks([task, ...tasks]);
  };

  const findTask = (id) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    return task;
  };

  const toggleTask = (id) => {
    const newTasks = [...tasks];
    const task = findTask(id);
    task.isCompleted = !task.isCompleted;
    setTasks(newTasks);
  };

  const editTask = (id) => {
    const newTasks = [...tasks];
    const task = findTask(id);
    task.text = prompt("Updated Text", task.text);
    while (task.text === "") {
      alert("Empty task not allowed");
      task.text = prompt("Updated Text", task.text);
    }
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleVisibility = (text) => () => {
    setVisibility(text);
  };

  const filterTasks = () => {
    switch (visibility) {
      case "all":
        return tasks;
      case "completed":
        return tasks.filter((task) => task.isCompleted);
      case "incomplete":
        return tasks.filter((task) => !task.isCompleted);
      default:
        return tasks;
    }
  };

  return (
    <Layout>
      <Box>Enter your task</Box>
      <CreateTask addNewTask={addNewTask} />
      <Box className={styles.container}>
        <Grid gap="4">
          <button onClick={handleVisibility("all")}>All</button>
          <button onClick={handleVisibility("incomplete")}>Incomplete</button>
          <button onClick={handleVisibility("completed")}>Completed</button>
        </Grid>
      </Box>
      {/* <p>Selected visibility: {visibility}</p> */}
      <ShowTask
        tasks={filterTasks()}
        editTask={editTask}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </Layout>
  );
};

export default Task;
