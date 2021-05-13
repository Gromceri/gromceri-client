import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    Button
 } from 'react-native';

const Widget = ({ order, message }) => {
    return (
        <View>
            <TouchableOpacity style={styles.Widget}>
                <Text style={{color: '#d3d3d3',
            fontSize: 27.5, margin: 20}}>
                    {message}
                </Text>
                <Text style={{fontSize: 50}}>🛒</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Widget: {
        backgroundColor: '#424141',
        borderRadius: 15,
        justifyContent: 'space-evenly',
        padding: 15,
        width: '92%',
        height: 175,
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 15
}})

Widget.propTypes = {

}

export default Widget
