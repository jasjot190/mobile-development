/**
 * My To Do List App
 *
 * @format
 */

import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

function App() {
  const [listOfTasks, setListOfTasks] = useState([
    "Do laundry",
    "Go to gym",
    "Walk dog",
  ]);

  return (
    <SafeAreaView>
      <ToDoList tasks={listOfTasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
