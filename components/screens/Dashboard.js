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
 import styles from '../Message'
import Message from '../Message'
import Widgets from '../Widgets';

const Dashboard = ({ route, navigation }) => {
    const { email } = route.params

    return (
        <ScrollView style={dashboardStyles.container}>
            <Message 
                passedStyle={{
                    alignSelf:'flex-start',
                    margin: 25,
                }}
                message={'Hello,\n' + email + ' 👋'}/>
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
