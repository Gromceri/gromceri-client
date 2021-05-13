import React from 'react'
import PropTypes from 'prop-types'
import { username } from './LoginScreen'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    Button,
    ScrollView
 } from 'react-native';
 import styles from '../Message'
import Message from '../Message'
import Widgets from '../Widgets';

const Dashboard = ({ route, navigation }) => {
    const { username } = route.params

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
