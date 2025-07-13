import { Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useRef, useState } from "react";
import Clock from '../component/Clock';
import Calender from '../component/Calender';
import AddButton from '../component/AddButton';

export default function Add() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const clockRef = useRef();
  const calendarRef = useRef();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          placeholder="Write your Plans here..."
          placeholderTextColor="#999"
          value={desc}
          onChangeText={setDesc}
        />
        <TextInput
          style={styles.title}
          multiline={true}
          numberOfLines={1}
          placeholder="Title"
          placeholderTextColor="#999"
          value={title}
          onChangeText={setTitle}
        />
        <Clock ref={clockRef} />
        <Calender ref={calendarRef} />
        <AddButton
          title={title}
          desc={desc}
          clockRef={clockRef}
          calendarRef={calendarRef}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181a1b',
    flex: 1,
  },
  input: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    color: 'white',
    textAlignVertical: 'top',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    fontSize: 15,
  },
  title: {
    height: 61,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    color: 'white',
    textAlignVertical: 'top',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    fontSize: 15,
  }
});
