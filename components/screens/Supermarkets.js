import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { loadTokens } from '../../utility functions/asyncStorage'
var _ = require('lodash');
import Products from './Products'

import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    Button,
    FlatList,
    ScrollView
 } from 'react-native';
 import dashboardStyles from './Dashboard'
 import Message from '../Message'
import SmallWidget from '../SmallWidget';
import { useState } from 'react/cjs/react.development';

export let arrayOfLocations;
const Supermarkets = ({ navigation }) => {
    const [supermarkets, setSupermarkets] = useState([])

    const handlePickSupermarketPress = (supermarket) => {
        navigation.navigate('Products', { supermarket })
    }

    const handleAddSupermarketPress = () => {
        navigation.navigate('Add Supermarkets', { getSupermarkets })
    }

    const getSupermarkets = async () => {
        let token = (await loadTokens()).token
        
        const data = `{"query":"{user {supermarkets {name, location, image}}}"}`       
        const payload = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                },
            body: data
        };

        const response = await fetch('https://gromceritestbackend2.herokuapp.com/graphql', payload)
                .then(response => response.json())
                .then(res => {
                    console.log("The response has been sent")
                    setSupermarkets(res.data.user.supermarkets)
                    arrayOfLocations = res.data.user.supermarkets.map(i => i.location)
                })
            
        }
    useEffect(() => {
        let isCancelled = false;
        getSupermarkets()
        
        return () => {
            isCancelled = true;
        };

    }, [])


    return (
        <View style={styles.container} >
            <Message passedStyle={{
                    alignContent:'center',
                    margin: 25,
                    textAlign: 'center',
                }}
                message='Time to pick a supermarket.'
            />
            <ScrollView >
                <View style={styles.scrollContainer}>
                    {supermarkets.map(supermarket => (
                        <SmallWidget 
                            onPress={() => {
                                handlePickSupermarketPress(supermarket)
                            }}
                            key={supermarket.location}
                            location={supermarket.location}
                            imageURL={supermarket.image} />
                    ))}
                    <SmallWidget 
                        onPress={handleAddSupermarketPress}
                        location="Add shop to favourites"
                        imageURL="https://res.cloudinary.com/gromceri-test/image/upload/v1621732129/supermarket-add_xkglyn.png"/>
                   
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      backgroundColor: '#313131',
    },
     
    scrollContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-evenly",

        }
})

Supermarkets.propTypes = {


}

export default Supermarkets