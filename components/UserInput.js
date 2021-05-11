import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacityBase,
    Button
 } from 'react-native';
import { useState } from 'react';

const UserInput = ({ placeholder, secure }) => {

    const [text, setText] = useState('')

    const handleTextChange = (text) => {
        setText(text)
        console.log(text)
    }

    return (
        <View>
            <TextInput 
                style={styles.UserInput}
                placeholder={placeholder}
                secureTextEntry={secure}
                placeholderTextColor="#848484" 
                onChangeText={handleTextChange}
            >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    UserInput: {
        textAlign: 'center',
        width: 275,
        alignContent: 'center',
        color: 'white',
        opacity: 1,
        fontSize: 20,
        alignSelf: 'center',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#525252',
        margin: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    
    },
})

UserInput.propTypes = {

}

export default UserInput
