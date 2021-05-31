import React from 'react';
import { ImageBackground, StyleSheet, Alert, View } from 'react-native';
import RegistrationForm from '../RegistrationForm'
import 'react-native-gesture-handler';
import { useState } from 'react';
import { saveTokens, loadTokens } from '../../utility functions/asyncStorage'
import { getData } from '../../utility functions/queryFetch'


const image = {
  uri: "https://res.cloudinary.com/gromceri-test/image/upload/v1622163063/Method_Draw_Image_3_k4qxgq.png"
}

export default function LoginScreen({ navigation }) {

	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	// screw you state
	// const [username, setUsername] = useState('')


	/**
	 * Fetches the user data from the server
	 * and sends the username to the dashboard.
	 */

	const getUsernameSync = async function() {   
		getData(`{"query":"{user {username}}"}`)
			.then(val =>  {
				// state setter simply decided to not work
				// so I used to good ol' way 
				const whyDidItNotWork = val.user.username
				navigation.navigate('Dashboard', { whyDidItNotWork })
				
		})

	} 

	/**
	 * Handles the submit information provided
	 * by the user, checks for errors and displays
	 * them. If there are none, calls function to 
	 * get username and redirect to dashboard.
	 */

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
				if (data.errors!==null) {

					if (data.errors.Email) {
						Alert.alert(data.errors.Email[0])
					} else if (data.errors.Password) {
						Alert.alert(data.errors.Password[0])
					} else {
						Alert.alert(data.errors[0])
					}

				} else {
					saveTokens(data.token, data.refreshToken)
					getUsernameSync()	
				}
			})
	}

	/**
	 * Changes the state of the email
	 * with every letter typed by user.
	 * @param email the user email
	 */

	const handleUsernameChange = (email) => {
		setEmail(email)
	}


	/**
	 * Changes the state of the password
	 * with every letter typed by user.
	 * @param password the user password
	 */
	
	const handlePasswordChange = (password) => {
		setPassword(password)
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
