import React from 'react'
import { View } from 'react-native';
 import Widget from './Widget'


const Widgets = ({message, icon, onPressReport, onPressGroupRecipe, 
    onPressProduct, onPressRecipes, onPressSupermarkets }) => {

    // hardcoded values because server
    // does not have them yet
    const widgets = [
            {
                hasPhoto: false,
                message: "Shop by supermarket",
                passedStyle: '#424141',
                iconName: "cart-outline",
                iconBackgroundColor: "#3e5dca",
                onPress: onPressSupermarkets
            },
            {
                hasPhoto: false,
                message: 'Browse your recipes',
                passedStyle: '#4e79ba',
                iconName: 'book-outline',
                iconBackgroundColor: '#313131',
                onPress: onPressRecipes
            },

            {
                hasPhoto: false,
                message: "Add a product",
                passedStyle: '#424141',
                iconName: "cart-outline",
                iconBackgroundColor: "#3e5dca",
                onPress: onPressProduct
            },

            {
                hasPhoto: false,
                message: "Start a group recipe",
                passedStyle: '#4e79ba',
                iconName: "cart-outline",
                iconBackgroundColor: "#3e5dca",
                onPress: onPressGroupRecipe
            },

            {
                hasPhoto: false,
                message: "Report a problem",
                passedStyle: '#424141',
                iconName: "cart-outline",
                iconBackgroundColor: "#3e5dca",
                onPress: onPressReport
            },
        ]

    return (
        <View>
            {widgets.map((widget, index) => 
                <Widget 
                    key={index}
                    hasPhoto={widget.hasPhoto}
                    message={widget.message}
                    iconName={widget.iconName}
                    passedStyle={{backgroundColor: widget.passedStyle}}
                    iconBackgroundColor={widget.iconBackgroundColor}
                    onPress={widget.onPress} 
                />)}
        </View>
    )
}

Widgets.propTypes = {

}

export default Widgets
