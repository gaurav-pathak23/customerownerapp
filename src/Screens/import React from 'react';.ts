import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, Picker, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validAadharNumbers = ['123412341234', '987654321098']; // Dummy list

const validationSchema = Yup.object().shape({
  businessName: Yup.string().required('Business name is required'),
  aadharNumber: Yup.string()
    .required('Aadhar Number is required')
    .length(12, 'Aadhar must be 12 digits')
    .test('exists', 'This Aadhar Number doesn’t exist', value =>
      validAadharNumbers.includes(value)
    ),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const AadharForm = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={{ businessName: '', aadharNumber: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          alert('Form submitted');
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <View>
            {/* Business Name */}
            <Text style={styles.label}>Business Name</Text>
            <Picker
              selectedValue={values.businessName}
              onValueChange={itemValue => setFieldValue('businessName', itemValue)}
              style={[
                styles.input,
                touched.businessName && errors.businessName && styles.inputError
              ]}
            >
              <Picker.Item label="Select Business Name" value="" />
              <Picker.Item label="Company A" value="CompanyA" />
              <Picker.Item label="Company B" value="CompanyB" />
            </Picker>
            {touched.businessName && errors.businessName && (
              <Text style={styles.error}>{errors.businessName}</Text>
            )}

            {/* Aadhar Number */}
            <Text style={styles.label}>Aadhar Number</Text>
            <TextInput
              style={[
                styles.input,
                touched.aadharNumber && errors.aadharNumber && styles.inputError
              ]}
              keyboardType="numeric"
              maxLength={12}
              placeholder="Enter Aadhar Number"
              placeholderTextColor="#888"
              onChangeText={handleChange('aadharNumber')}
              onBlur={handleBlur('aadharNumber')}
              value={values.aadharNumber}
            />
            {touched.aadharNumber && errors.aadharNumber && (
              <Text style={styles.error}>{errors.aadharNumber}</Text>
            )}

            {/* Email Address */}
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={[
                styles.input,
                touched.email && errors.email && styles.inputError
              ]}
              keyboardType="email-address"
              placeholder="Enter Email Address"
              placeholderTextColor="#888"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            {/* Password */}
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={[
                styles.input,
                touched.password && errors.password && styles.inputError
              ]}
              secureTextEntry
              placeholder="Enter Password"
              placeholderTextColor="#888"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0A1A1F',
    flexGrow: 1
  },
  label: {
    color: 'white',
    marginBottom: 4,
    fontSize: 14
  },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 4,
    padding: 10,
    color: 'white',
    backgroundColor: '#1c2a30',
    marginBottom: 12
  },
  inputError: {
    borderColor: 'red'
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8
  }
});

export default AadharForm;
//   ..........................red alert
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: '', password: '' };

    if (!email.trim()) {
      newErrors.email = 'Please enter an email';
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Please enter a password';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      Alert.alert('Success', 'Form is valid!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Email Field */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={text => {
          setEmail(text);
          setErrors({ ...errors, email: '' });
        }}
        style={[
          styles.input,
          errors.email ? styles.inputError : null,
        ]}
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      {/* Password Field */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={text => {
          setPassword(text);
          setErrors({ ...errors, password: '' });
        }}
        style={[
          styles.input,
          errors.password ? styles.inputError : null,
        ]}
      />
      {errors.password ? (
        <Text style={styles.errorText}>{errors.password}</Text>
      ) : null}

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={validateForm}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  label: {
    fontSize: 16,
    marginTop: 15,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#1b1e22',
    color: 'white',
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#0a8',
    padding: 15,
    marginTop: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

