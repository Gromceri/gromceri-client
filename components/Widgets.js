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
                iconName='cart-outline'
                iconBackgroundColor='#3e5dca'/>
            <Widget 
                message='Browse your recipes'
                passedStyle={{backgroundColor: '#4e79ba'}}
                iconName='book-outline'
                iconBackgroundColor='#313131'/>
            <Widget 
                message='Add a product'
                iconName='nutrition-outline'
                iconBackgroundColor='#3e5dca'/>
            <Widget 
                message='Start a group recipe'
                passedStyle={{backgroundColor: '#4e79ba'}}
                iconName='people-outline'
                iconBackgroundColor='#313131'/>
            <Widget 
                message='Report a problem'
                iconName='alert-circle-outline'
                iconBackgroundColor='#3e5dca'/>

        </View>
    )
}

Widgets.propTypes = {

}

export default Widgets
