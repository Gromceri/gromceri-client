import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    Button
 } from 'react-native';
 import Widget from './Widget'
 import styles from './Widget'

const Widgets = ({message, icon}) => {
    return (
        <View>
            <Widget
                message='Shop by supermarket' 
                icon='🛒'/>
            <Widget 
                message='Browse your recipes'
                icon='sdfd'
                passedStyle={{backgroundColor: '#4e79ba'}} />
            <Widget 
                message='Add a product'/>
            <Widget 
                message='Start a group recipe'
                passedStyle={{backgroundColor: '#4e79ba'}} />
            <Widget 
                message='Add something'/>

        </View>
    )
}

Widgets.propTypes = {

}

export default Widgets
