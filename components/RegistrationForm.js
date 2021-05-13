import React from 'react'
import { StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
 } from 'react-native';
import Header from './Header'
import Message from './Message'
import SubmitButton from './SubmitButton';
import UserInput from './UserInput';

const RegistrationForm = ({ onPress, handlePasswordChange, handleUsernameChange, handleSubmitInfo }) => {

    return (
        <View style={styles.RegistrationForm}>
            <View style={styles.WelcomeText}>
                <Header />
                <Message 
                    message='Welcome to Gromceri' />
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
                    onPress={handleSubmitInfo}
                /> 
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
        height: '85%',
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
