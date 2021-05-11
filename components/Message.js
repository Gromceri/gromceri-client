import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacityBase,
    Button
 } from 'react-native';

const Message = () => {
    return (
        <View>
            <Text style={styles.Message}>Welcome to Gromceri.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Message: {
        color: '#a2a2a2',
        fontSize: 30,
        alignSelf: 'center'
    },
})

Message.propTypes = {

}

export default Message
