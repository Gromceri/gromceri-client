import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacityBase,
    Button
 } from 'react-native';

const Message = ({ message }) => {
    return (
        <View>
            <Text style={styles.Message}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Message: {
        color: '#d0d0d0',
        fontSize: 30,
        alignSelf: 'center'
    },
})

Message.propTypes = {

}

export default Message
