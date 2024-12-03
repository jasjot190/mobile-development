/**
 * My To Do List App
 *
 * @format
 */

import React from "react";
import HomeScreen from "./screens/HomeScreen";
// import AboutScreen from "./screens/AboutScreen";
import { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// function App() {
//   const Stack = createStackNavigator();

//   const [listOfTasks, setListOfTasks] = useState([
//     "Do laundry",
//     "Go to gym",
//     "Walk dog",
//   ]);

//   const addTask = (task) => {
//     setListOfTasks([...listOfTasks, task]);
//   };

//   return (
//     <NavigationContainer>
//       <SafeAreaView
//         style={{
//           borderWidth: 5,
//           padding: 40,
//           margin: 40,
//           borderColor: "#808080",
//         }}
//       >
//         <Text style={{ fontSize: 35, fontWeight: 500 }}>List of Tasks</Text>
//         <ToDoList tasks={listOfTasks} />
//         <ToDoForm addTask={addTask} />
//       </SafeAreaView>
//     </NavigationContainer>
//   );
// }

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="About" component={AboutScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
