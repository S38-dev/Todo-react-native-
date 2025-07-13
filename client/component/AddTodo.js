import { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from 'expo-router';

function AddTodo(){
   
    return( 
    <TouchableOpacity 
      style={styles.add}
      onPress={()=>{router.push('/add')}}
    >
        <Text style={styles.plus} >✚</Text>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  add:{
     width: 50,           
    height: 50,        
    borderRadius:50,     
    backgroundColor: 'purple',
    justifyContent: 'center',   
    alignItems: 'center',
    

  },
  plus:{
    fontSize: 30,
    color:'white'
  }
})
export default AddTodo;