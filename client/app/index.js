// app/index.js
import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AddTodo   from '../component/AddTodo';
import Schedules from '../component/Schedules';
import { RefreshContext } from '../context/RefreshContext';

export default function Index() {
  const { refresh } = useContext(RefreshContext);

  return (
    <View style={styles.container}>
      <View style={styles.schedulesContainer}>
        <Schedules refresh={refresh} />
      </View>
      <View style={styles.addContainer}>
        <Text style={styles.text}>Add a Todo</Text>
        <AddTodo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:         { flex:1, backgroundColor:'#1e1e1e' },
  schedulesContainer:{ flex:2 },
  addContainer:      {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1e1e1e',
  },
  text:              { color:'white', fontSize:20, marginBottom:10 },
});
