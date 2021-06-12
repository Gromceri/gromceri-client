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
                hasPhoto={false}
                message='Shop by supermarket' 
                iconName='cart-outline'
                iconBackgroundColor='#3e5dca'
                onPress={onPressSupermarkets}/>
            <Widget 
                hasPhoto={false}
                message='Browse your recipes'
                passedStyle={{backgroundColor: '#4e79ba'}}
                iconName='book-outline'
                iconBackgroundColor='#313131'
                onPress={onPressRecipes}/>
            <Widget 
                hasPhoto={false}
                message='Add a product'
                iconName='nutrition-outline'
                iconBackgroundColor='#3e5dca'
                onPress={onPressProduct}/>
            <Widget 
                hasPhoto={false}
                message='Start a group recipe'
                passedStyle={{backgroundColor: '#4e79ba'}}
                iconName='people-outline'
                iconBackgroundColor='#313131'
                onPress={onPressGroupRecipe}/>
            <Widget 
                hasPhoto={false}
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
