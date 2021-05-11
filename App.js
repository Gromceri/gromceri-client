import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationForm from './components/RegistrationForm'


export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'beige',
  },
});
