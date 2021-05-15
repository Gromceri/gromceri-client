import React from 'react'
import PropTypes from 'prop-types'
import { email } from './LoginScreen'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    Button,
    ScrollView
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

    useEffect(() => {
        async function urmom() {
            let token = (await loadTokens()).token
    
            const data = `{"query":"{user {userName}}"}`
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
                .then(res => setUsername(res.data.user.userName))
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
            <Widgets />
        </ScrollView>
    )
}
export const dashboardStyles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#313131',
    }
})
Dashboard.propTypes = {

}

export default Dashboard
