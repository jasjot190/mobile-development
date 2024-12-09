import { StyleSheet, View, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
const customData = require("../src/data/tasks.json");

export function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState("Add a new task...");
  const taskhandler = (taskText) => {
    if (taskText == "Add a new task...") {
    } else {
      addTask(taskText);
      setTaskText("Add a new task...");
    }
  };
  const randomTask = () => {
    let randomNumber =
      Math.floor(Math.random() * (customData.tasks.length - 1 + 1)) + 1;
    setTaskText(customData.tasks[randomNumber]);
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder={taskText}
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => taskhandler(taskText)} />
      <Button title="Random Task" onPress={() => randomTask()} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    gap: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
