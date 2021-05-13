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

 import Message from '../Message'
import Widgets from '../Widgets';

const Dashboard = ({ route, navigation }) => {
    const { username } = route.params

    return (
        <ScrollView style={styles.container}>
            <Message 
                message={'\nHello,\n' + username + ' 👋\n'}/>
            <Widgets />
        </ScrollView>
    )
}
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#313131',
    }
})
Dashboard.propTypes = {

}

export default Dashboard
