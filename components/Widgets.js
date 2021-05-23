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

const Widgets = ({message, icon, onPressReport, onPressGroupRecipe, onPressProduct, onPressRecipes, onPressSupermarkets }) => {
    return (
        <View>
            <Widget
                message='Shop by supermarket' 
                iconName='cart-outline'
                iconBackgroundColor='#3e5dca'
                onPress={onPressSupermarkets}/>
            <Widget 
                message='Browse your recipes'
                passedStyle={{backgroundColor: '#4e79ba'}}
                iconName='book-outline'
                iconBackgroundColor='#313131'
                onPress={onPressRecipes}/>
            <Widget 
                message='Add a product'
                iconName='nutrition-outline'
                iconBackgroundColor='#3e5dca'
                onPress={onPressProduct}/>
            <Widget 
                message='Start a group recipe'
                passedStyle={{backgroundColor: '#4e79ba'}}
                iconName='people-outline'
                iconBackgroundColor='#313131'
                onPress={onPressGroupRecipe}/>
            <Widget 
                message='Report a problem'
                iconName='alert-circle-outline'
                iconBackgroundColor='#3e5dca'
                onPress={onPressReport}/>

        </View>
    )
}

Widgets.propTypes = {

}

export default Widgets
