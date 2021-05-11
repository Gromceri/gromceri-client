import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import RegistrationForm from './components/RegistrationForm'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';



const image = {
  uri: "https://res.cloudinary.com/gromceri-test/image/upload/v1620754247/picture_ytvnb6.png"
}

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <RegistrationForm />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#313131',
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
