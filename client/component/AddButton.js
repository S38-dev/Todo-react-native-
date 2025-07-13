import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
const {storeData,getData} =require('./asyncStorage.js');
function AddButton({ onPress, title, desc, clockRef, calendarRef }) {
 
  const handlePress = async () => {
    try {
      const time = clockRef.current?clockRef.current:null; 
      const date = calendarRef.current?calendarRef.current:null;
      
      if (!time || !date || !title || !desc) {
        Alert.alert("Missing info", "Please complete all fields.");
        return;
      }
    


      const [hourStr, minuteStr] = time.replace(' am', '').replace(' pm', '').split(':');
      let hour = parseInt(hourStr.trim());
      const minute = parseInt(minuteStr.trim());

      if (time.toLowerCase().includes('pm') && hour !== 12) hour += 12;
      if (time.toLowerCase().includes('am') && hour === 12) hour = 0;
      
      await Notifications.scheduleNotificationAsync({
        content: {
          title: title || "Reminder",
          body: desc || 'Time to check your plan!',
        },
        trigger: {
          hour,
          minute,
          repeats: false,
        },
      });

      Alert.alert( "Your alarm has been set!");

    } catch (err) {
      Alert.alert("Error", "Failed to schedule notification.");
      console.error(err);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    top: '40%',
    left: '80%'
  },
  plus: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default AddButton;
