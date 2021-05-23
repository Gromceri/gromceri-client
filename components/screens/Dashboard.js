import React from 'react'
import PropTypes from 'prop-types'
import { email } from './LoginScreen'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    Button,
    ScrollView,
    Alert
 } from 'react-native';
import { useState, useEffect } from 'react';
import styles from '../Message'
import Message from '../Message'
import Widgets from '../Widgets';
import { loadTokens } from '../../utility functions/asyncStorage'
import { Ionicons } from '@expo/vector-icons';


const Dashboard = ({ route, navigation }) => {
    const { email } = route.params
    const [username, setUsername] = useState(email)

    const handleShopBySupermarketPress = () => {
        navigation.navigate('Supermarkets')
    }

    const handleBrowseRecipesPress = () => {
       Alert.alert('To be implemented.') 
    }

    const handleAddProductPress = () => {
        Alert.alert('To be implemented.') 
     }

     const handleStartGroupRecipePress = () => {
        Alert.alert('To be implemented.') 
     }

     const handleReportProblemPress = () => {
        Alert.alert('To be implemented.') 
     }

    useEffect(() => {
        async function urmom() {
            let token = (await loadTokens()).token
    
            const data = `{"query":"{user {username}}"}`
            const payload = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                 },
                body: data
            };
    
            fetch('https://gromceritestbackend2.herokuapp.com/graphql', payload)
                .then(response => response.json())
                .then(res => {
                    console.log(res.data)
                    setUsername(res.data.user.username)
                }
                )
        }
        urmom()
    }, [])

    return (
        <ScrollView style={dashboardStyles.container}>
            <Message 
                passedStyle={{
                    alignSelf:'flex-start',
                    margin: 25,
                }}
                message={'Hello,\n' + username + ' 👋'}/>
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
    }
})
Dashboard.propTypes = {

}

export default Dashboard
