// app/add.js
import React, { useRef, useState } from 'react';
import {
  View, TextInput, TouchableWithoutFeedback,
  Keyboard, StyleSheet
} from 'react-native';
import Clock      from '../component/Clock';
import Calender   from '../component/Calender';
import AddButton  from '../component/AddButton';

export default function Add() {
  const [title, setTitle] = useState('');
  const [desc,  setDesc]  = useState('');
  const clockRef    = useRef();
  const calendarRef = useRef();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Write your Plans here..."
          placeholderTextColor="#999"
          value={desc}
          onChangeText={setDesc}
          multiline
        />
   d
        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor="#999"
          value={title}
          onChangeText={setTitle}
        />

        <Clock    clockRef={clockRef} />
        <Calender calendarRef={calendarRef} />

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
  container:{ flex:1, backgroundColor:'#181a1b', padding:20 },
  input:    {
    borderWidth:1,
    borderColor:'#444',
    borderRadius:8,
    padding:10,
    color:'#fff',
    backgroundColor:'#1e1e1e',
    marginBottom:15,
  },
});
