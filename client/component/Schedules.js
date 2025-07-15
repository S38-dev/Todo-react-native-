import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Alert } from 'react-native';
import CheckBox from 'react-native-check-box';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { getData } from './asyncStorage';

const Schedules = ({refresh}) => {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stored = await getData();
        const mapped = stored.map(([key, value]) => {
          let parsed = {};
          try {
            parsed = JSON.parse(value);
          } catch (err) {
            parsed = { title: value };
          }
          return {
            key,
            ...parsed,
            checked: false,
          };
        });
        setData(mapped);
      } catch (err) {
        console.error("Failed to load schedules:", err);
      }
    };

    fetchData();
  }, [refresh]);

  
  const handleCheck = async (itemKey, index) => {
    try {
      const item = data[index];
      

      if (item.notificationId) {
        await Notifications.cancelScheduledNotificationAsync(item.notificationId);
        console.log(`Notification ${item.notificationId} cancelled.`);
      }

      await AsyncStorage.removeItem(itemKey);
      const updatedData = data.filter((_, i) => i !== index);
      setData(updatedData);

      Alert.alert('Done!', 'The task has been removed and notification cancelled.');
    } catch (err) {
      console.error("Error removing item:", err);
      Alert.alert("Error", "Failed to remove the item.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {data.length === 0 ? (
        <Text style={styles.empty}>📭 No schedules found!</Text>
      ) : (
        data.map((item, index) => (
          <View key={item.key} style={styles.item}>
            <CheckBox
              isChecked={item.checked}
              onClick={() => handleCheck(item.key, index)}
              checkBoxColor="#8000ff"
            />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.body || ''}</Text>
              <Text style={styles.time}>
                ⏰ {item.hour}:{String(item.minute).padStart(2, '0')}
              </Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181a1b',
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  desc: {
    color: '#ccc',
    fontSize: 14,
    marginLeft: 10,
  },
  time: {
    color: '#aaa',
    fontSize: 12,
    marginLeft: 10,
  },
  empty: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default Schedules;
