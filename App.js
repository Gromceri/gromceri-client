import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Image } from 'react-native';
import Dashboard from './components/screens/Dashboard'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import LoginScreen from './components/screens/LoginScreen';
import Supermarkets from './components/screens/Supermarkets';
import Categories from './components/screens/Categories'
import AddSupermarkets from './components/screens/AddSupermarkets';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';

export const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={30} {...props} />
);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container} >
      <Stack.Navigator
        screenOptions={options}>

        <Stack.Screen 
          name='Login'
          component={LoginScreen}
          options={{
            
          }}
          />

        <Stack.Screen 
          name='Dashboard'
          component={Dashboard}
          options={{
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item
                  buttonStyle={
                    {
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: 35
                    }
                  }
                  title="Profile" 
                  iconName="person-circle-outline"
                  onPress={() => alert('To be implemented.')} />
              </HeaderButtons>
            )
          ,
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
              <Item
                buttonStyle={
                  {
                    color: 'white',
                    fontSize: 35
                  }
                }
                title="Profile" 
                iconName="settings-outline"
                onPress={() => alert('To be implemented.')} />
            </HeaderButtons>
          )}} />

        <Stack.Screen 
          name='Supermarkets'
          component={Supermarkets}
          options={{
            
          }}
          />

        <Stack.Screen 
          name='Add Supermarkets'
          component={AddSupermarkets}
          options={{
            
          }}
          />

          <Stack.Screen 
          name='Categories'
          component={Categories}
          options={{
            
          }}
          />

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
  headerTintColor: 'white',
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: 'flex',
    // justifyContent: 'center',
  },
  button: {
    marginRight: 10,
    backgroundColor: 'white'
  }
});

