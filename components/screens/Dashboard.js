import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    Button
 } from 'react-native';

const Dashboard = () => {
    return (
        <View>
            <Text>Hello. This is the dashboard.</Text>
            <Button title='Go back'/>
            
        </View>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
