import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/screens/Dashboard'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import LoginScreen from './components/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container} >
      <Stack.Navigator
        screenOptions={options}>

        <Stack.Screen 
          name='Login'
          component={LoginScreen}
          />

        <Stack.Screen 
          name='Dashboard'
          component={Dashboard}
          options={options}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const options = {
  headerStyle: {
    backgroundColor: '#d25960',
    height: 60,
  }, 
  headerTitleAlign: 'center',
  headerTitleAllowFontScaling: true,
  headerStatusBarHeight: 7,
  headerTintColor: 'white'
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: 'flex',
    // justifyContent: 'center',
  },
});

