import React from 'react'
import { StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
    Alert,
 } from 'react-native';
import Header from './Header'
import Message from './Message'
import SubmitButton from './SubmitButton';
import UserInput from './UserInput';
import { useState } from 'react';


const RegistrationForm = () => {

    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    })

    const handleUsernameChange = (user) => {
        setUsername(user)
        console.log(user)
    }

    const handlePasswordChange = (pass) => {
        setPassword(pass)
        console.log(pass)
    }

    const handleSubmitInfo = () => {
        username && password ?
        setUserInfo({
            username: username,
            password: password
        }) : Alert.alert(`Please fill in the ${username ? 'password' : 'username'} field.`)
    
    }

    return (
        <View style={styles.RegistrationForm}>
            <View style={styles.WelcomeText}>
                <Header />
                <Message />
            </View>
            <View style={styles.SubmitInputs}>
                <UserInput 
                    placeholder='Username'
                    secure={false} 
                    onChangeText={handleUsernameChange}
                />
                <UserInput 
                    placeholder='Password'
                    secure={true} 
                    onChangeText={handlePasswordChange}
                />
                <SubmitButton
                    message='Login'
                    onPress={handleSubmitInfo} /> 
            </View>
            <TouchableOpacity>
                <Text style={styles.SignUpLink}>New to Gromceri?{"\n"}
                Create an account!</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    RegistrationForm: {
        width: '100%',
        height: '80%',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'flex-start'    
    },

    WelcomeText: {
        display: 'flex',
        height: "20%",
        justifyContent: 'space-between',
    },
    
    SubmitInputs: {
        display: 'flex',
        height: '45%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    SignUpLink: {
        textAlign: 'center',
        fontSize: 17,
        color: '#b4b4b4',
    }
})

export default RegistrationForm
