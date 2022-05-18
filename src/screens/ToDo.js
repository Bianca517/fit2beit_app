import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, Keyboard } from 'react-native';
import Task from '../components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ToDo() {

    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index,1);
        setTaskItems(itemsCopy);
    }

    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Today's tasks</Text>
            <View style={styles.items}>
                {
                    taskItems.map((item, index) => {
                        return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                     <Task text={item}/>
                                </TouchableOpacity>
                        )
                    } )
                }
                </View>
            </View>
            <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                    <Text>+</Text>
                </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#E8EAED"
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
        marginTop: 90
    },

    writeTaskWrapper: {
        position: 'absolute',
        top: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    input: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
        marginLeft: 20
    },

    addWrapper: {
        width: 55,
        height:55,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        marginRight: 20
    },
    
})