import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const Calender = () => {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState('Calendar');

  const hideDatePicker = () => {
    setVisible(false);
  };

  const handleConfirm = (selectedDate) => {
    setDate(selectedDate); // still keep Date object for logic
    setText(moment(selectedDate).format('DD-MM-YYYY')); // display formatted
    hideDatePicker();
  };

  return (
    <>
      <TouchableOpacity style={styles.Calender} onPress={() => setVisible(true)}>
        <Text style={styles.clockText}>{text}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        date={date}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display="default"
        isDarkModeEnabled={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Calender:{
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,

        textAlignVertical: 'top',
        backgroundColor: '#1e1e1e',
        borderRadius: 10,

    },
  clockText: {
    color: 'white',
    fontSize: 16,
   
  },
});

export default Calender;
