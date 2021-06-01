import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacityBase,
    Button
 } from 'react-native';

const Message = ({ message, passedStyle }) => {
    return (
        <View>
            <Text style={[ styles.Message, passedStyle ]}>{message}</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    Message: {
        color: '#d0d0d0',
        fontSize: 35,
        alignSelf: 'center',

    }
})

Message.propTypes = {

}

export default Message
