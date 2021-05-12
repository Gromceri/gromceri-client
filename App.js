import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/screens/Dashboard'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container} >
      <Stack.Navigator>
        <Stack.Screen 
          name='Login'
          component={LoginScreen}/>

        <Stack.Screen 
          name='Dashboard'
          component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: 'flex',
    // justifyContent: 'center',
  },
});

