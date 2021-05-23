import React from 'react';
import { ImageBackground, StyleSheet, Alert, View } from 'react-native';
import RegistrationForm from '../RegistrationForm'
import 'react-native-gesture-handler';
import { useState } from 'react';
import { saveTokens, loadTokens } from '../../utility functions/asyncStorage'

const image = {
  uri: "https://res.cloudinary.com/gromceri-test/image/upload/v1620754247/picture_ytvnb6.png"
}

export default function LoginScreen({ navigation }) {

	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [userInfo, setUserInfo] = useState({})

	const handleSubmitInfo = () => {
		data = { email, password }
		const payload = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		};

		fetch('https://gromceritestbackend2.herokuapp.com/api/authmanagement/login', payload)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				if (data.errors!==null) {
					console.log(data.errors)

					if (data.errors.Email) {
						Alert.alert(data.errors.Email[0])
					} else if (data.errors.Password) {
						Alert.alert(data.errors.Password[0])
					} else {
						Alert.alert(data.errors[0])
					}

				} else {
					saveTokens(data.token, data.refreshToken)
					
					navigation.navigate('Dashboard', { email })

				}
			})
			console.log("You have sent the request bitch")
	}

	const handleUsernameChange = (email) => {
		setEmail(email)
		console.log(email)
	}

	const handlePasswordChange = (password) => {
		setPassword(password)
		console.log(password)
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
export const styles = StyleSheet.create({
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
