import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacityBase,
    Button
 } from 'react-native';

const Header = () => {
    return (
        <View>
            <Text style={styles.Header}>Hello.</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    Header: {
        color: '#d25960',
        fontSize: 50,
        alignSelf: 'center',
    },
})

Header.propTypes = {

}

export default Header
