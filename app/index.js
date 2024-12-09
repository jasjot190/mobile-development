/**
 * My To Do List App
 *
 * @format
 */

import React from "react";
import { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

function App() {
  const [listOfTasks, setListOfTasks] = useState([
    "Do laundry",
    "Go to gym",
    "Walk dog",
  ]);

  const addTask = (task) => {
    setListOfTasks([...listOfTasks, task]);
  };

  return (
    <SafeAreaView
      style={{
        borderWidth: 5,
        padding: 40,
        margin: 40,
        borderColor: "#808080",
      }}
    >
      <Text style={{ fontSize: 35, fontWeight: 500 }}>List of Tasks</Text>
      <ToDoList tasks={listOfTasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
