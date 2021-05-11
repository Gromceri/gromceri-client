import React from 'react'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacityBase,
    Button
 } from 'react-native';


const RegistrationForm = () => {
    return (
        <View style={styles.RegistrationForm}>
            <Text>Hello.</Text>
            <Text>Welcome to Gromceri.</Text>
            <TextInput placeholder="Email"></TextInput>
            <TextInput placeholder="Password"></TextInput>
            <Button title="Sign up bitch"/>


        </View>
    )
}

const styles = StyleSheet.create({
    RegistrationForm: {
        display: 'flex',
        alignItems: 'center'

    }
})

export default RegistrationForm
