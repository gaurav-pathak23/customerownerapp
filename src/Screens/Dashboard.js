import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const Dashboard = () => {
  const [date, setDate] = useState(new Date(2000, 0, 1)); // default DOB
  console.log(date,"date.....date");
  
  const [show, setShow] = useState(false);
  const [dob, setDob] = useState('');
 console.log(dob,"dob...........");
 
  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios'); // iOS keeps picker open
    if (selectedDate) {
      setDate(selectedDate);
      setDob(moment(selectedDate).format('DD-MM-YYYY')); // or 'YYYY-MM-DD'
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Date of Birth</Text>

      <TouchableOpacity onPress={() => setShow(true)} style={styles.dobBox}>
        <Text style={{ color: dob ? '#000' : '#999' }}>
          {dob ? dob : 'Select Date of Birth'}
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChange}
          maximumDate={new Date()} // DOB should not be future date
        />
      )}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  dobBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    borderRadius: 6,
  },
});
