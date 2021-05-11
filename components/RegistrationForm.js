import React from 'react'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    Button,
 } from 'react-native';
import Header from './Header'
import Message from './Message'
import SubmitButton from './SubmitButton';
import UserInput from './UserInput';


const RegistrationForm = () => {

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
                />
                <UserInput 
                    placeholder='Password'
                    secure={true} 
                />
                               
                <SubmitButton message='Login' /> 
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
