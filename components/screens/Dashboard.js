import React from 'react'
import { email } from './LoginScreen'
import { StyleSheet,  
    ScrollView,
    Alert,
    Text
 } from 'react-native';
import { useState, useEffect } from 'react';
import Message, { styles } from '../Message'
import Widgets from '../Widgets';
import BigWidget from '../BigWidget';

import { getData } from '../../utility functions/queryFetch'

const Dashboard = ({ route, navigation }) => {
    const { whyDidItNotWork } = route.params

    /**
     * Navigates to the "Shop by 
     * supermarket" screen.
     */

    const handleShopBySupermarketPress = () => {
        navigation.navigate('Supermarkets')
    }

    /**
     * Navigates to the "Browse 
     * your recipes" screen.
     */

    const handleBrowseRecipesPress = () => {
       Alert.alert('To be implemented.') 
    }


    /**
     * Navigates to the "Add 
     * product" screen.
     */

    const handleAddProductPress = () => {
        Alert.alert('To be implemented.') 
     }


     /**
     * Navigates to the "Start 
     * group recipe" screen.
     */

     const handleStartGroupRecipePress = () => {
        Alert.alert('To be implemented.') 
     }


     /**
     * Navigates to the "Report 
     * a problem" screen.
     */

     const handleReportProblemPress = () => {
        Alert.alert('To be implemented.') 
     }

    return (
        <ScrollView style={dashboardStyles.container}>
            <Message 
                passedStyle={dashboardStyles.passedStyle}
                message={'Hello,\n' + whyDidItNotWork + '. 👋'}/>
            <Widgets 
                onPressSupermarkets={handleShopBySupermarketPress}
                onPressRecipes={handleBrowseRecipesPress}
                onPressProduct={handleAddProductPress}
                onPressGroupRecipe={handleStartGroupRecipePress} 
                onPressReport={handleReportProblemPress}
            />
            
        </ScrollView>
    )
}
const dashboardStyles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#313131',
    },

    passedStyle: {
        alignSelf:'flex-start',
        margin: 25,
    }
})
Dashboard.propTypes = {

}

export default Dashboard
