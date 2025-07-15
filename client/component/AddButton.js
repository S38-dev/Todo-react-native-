// components/AddButton.js
import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { storeData } from './asyncStorage';
import { RefreshContext } from '../context/RefreshContext';

export default function AddButton({ title, desc, clockRef, calendarRef }) {
  const { setRefresh } = useContext(RefreshContext);

  const handlePress = async () => {
    const time = clockRef.current;
    const date = calendarRef.current;

    if (!time || !date || !title || !desc) {
      return Alert.alert('Missing info', 'Please complete all fields.');
    }

    // Parse time string into hour and minute
    const [hourStr, minuteStr] = time.replace(/\s?(am|pm)/i, '').split(':');
    let hour = parseInt(hourStr.trim());
    const minute = parseInt(minuteStr.trim());
    if (/pm/i.test(time) && hour !== 12) hour += 12;
    if (/am/i.test(time) && hour === 12) hour = 0;

    const triggerDate = new Date(date);
    triggerDate.setHours(hour);
    triggerDate.setMinutes(minute);
    triggerDate.setSeconds(0);

    try {
      const notificationId = await Notifications.scheduleNotificationAsync({
        content: { title, body: desc },
        trigger: triggerDate,
      });

      
      setRefresh((prev) => !prev);

      storeData({ title, body: desc, hour, minute, notificationId, repeats: false });
      Alert.alert('✅ Alarm set!');
    } catch (err) {
      Alert.alert('Error', 'Failed to schedule notification.');
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
  },
  plus: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});