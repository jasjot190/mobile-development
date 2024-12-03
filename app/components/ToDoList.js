import { StyleSheet, Pressable, View, Text, ScrollView } from "react-native";

export function ToDoList({ tasks }) {
  return (
    <ScrollView style={{ borderWidth: 2, borderColor: "#808080", margin: 20 }}>
      {tasks.map((taskl) => (
        <Pressable key={Math.random().toString()}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{taskl}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
