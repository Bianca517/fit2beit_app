import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Keyboard,
  ScrollView,
  Dimensions,
} from "react-native";
import Task from "../components/Task";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "../../firebase";
import { TouchableWithoutFeedback } from "react-native-web";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ToDo() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  useState(() => {
    getAllTasks();
  });

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
    //add task in firebase collection
    return (
      db
        .collection("Tasks")
        .doc(task)
        .set({
          taskName: task,
        })
        //.then(() => alert("Task added successfully!"))
        .then(() => console.log("Task added successfully!"))
        .catch(err => Alert.alert(err.message))
    );
  };

  function completeTask(index, item) {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    //delete task from firebase collection
    db.collection("Tasks").doc(item).delete();
  }

  async function getAllTasks() {
    const snapshot = await db.collection("Tasks").get();
    const allTasks = [];
    snapshot.docs.map(doc => allTasks.push(doc.data()["taskName"].toString()));
    setTaskItems(allTasks);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        behavior="padding"
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index, item)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Write a task"}
            value={task}
            onChangeText={text => setTask(text)}
          />
          <TouchableOpacity
            onPress={() => {
              if (task != null) handleAddTask();
              else Alert.alert("Cannot add an empty task!");
            }}
          >
            <View style={styles.addWrapper}>
              <Text>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: -30,
  },
  items: {
    marginTop: 90,
  },
  writeTaskWrapper: {
    position: "absolute",
    top: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
    marginLeft: 20,
  },

  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    marginRight: 20,
  },
  scrollView: {
    overflow: "scroll",
  },
});
