/**
 * My To Do List App
 *
 * @format
 */

import React, { Button } from "react";
import { useState } from "react";
import { SafeAreaView, Text } from "react-native";
// import AboutScreen from "AboutScreen";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";

function HomeScreen({ navigation }) {
  const [listOfTasks, setListOfTasks] = useState([
    "Do laundry",
    "Go to gym",
    "Walk dog",
  ]);

  const addTask = (task) => {
    setListOfTasks([...listOfTasks, task]);
  };

  return (
    <MainLayout>
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
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </MainLayout>
  );
}

export default HomeScreen;
