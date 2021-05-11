import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    Button
 } from 'react-native';

const SubmitButton = ({ message }) => {
    return (
        <View>
            <TouchableOpacity style={styles.SubmitButton}>
                <Text style={styles.SubmitButtonText}>{ message }</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    SubmitButton: {
        width: 150,
        padding: 15,
        margin: 0,
        backgroundColor:"#3e5dca",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

    SubmitButtonText: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#d3d3d3',


    }
})

SubmitButton.propTypes = {

}

export default SubmitButton
