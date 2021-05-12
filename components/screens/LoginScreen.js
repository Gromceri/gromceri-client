import React from 'react';
import { ImageBackground, StyleSheet, Alert, View } from 'react-native';
import RegistrationForm from '../RegistrationForm'
import 'react-native-gesture-handler';
import { useState } from 'react';

const image = {
  uri: "https://res.cloudinary.com/gromceri-test/image/upload/v1620754247/picture_ytvnb6.png"
}

export default function LoginScreen({ navigation }) {

	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const [userInfo, setUserInfo] = useState({
			username: "",
			password: ""
	})

	const handleUsernameChange = (username) => {
		setUsername(username)
		console.log(username)
	}

	const handlePasswordChange = (password) => {
		setPassword(password)
		console.log(password)
	}

	const handleSubmitInfo = () => {
		console.log(username, password)
		
		if (!(username && password)) {
		Alert.alert(`Please fill in the ${username ? 'password' : 'username'} field.`)
		}

		else {
		setUserInfo({
				username: username,
				password: password
		})
		console.log(userInfo)
		navigation.navigate('Dashboard')
		}		
	}

	return (
		<View style={styles.container}>
			
		<ImageBackground 
			source={image} 
			style={styles.image}>

			<RegistrationForm 
				handleUsernameChange={handleUsernameChange}
				handlePasswordChange={handlePasswordChange}
				handleSubmitInfo={handleSubmitInfo}/>

		</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    height:  "100%", 
    width: "100%",
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
