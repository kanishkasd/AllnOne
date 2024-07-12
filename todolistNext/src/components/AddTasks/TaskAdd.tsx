"use client";
import React from "react";

const TaskAdd = () => {
  return (
    <form>
      <label htmlFor="addTasks">Add your tasks here </label>
      <input type="text" id="addTasks" placeholder="Add your task" />
    </form>
  );
};

export default TaskAdd;
