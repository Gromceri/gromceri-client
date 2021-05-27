import React from 'react'
import PropTypes from 'prop-types'
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

const Products = ({ route, navigation }) => {
    const { supermarket } = route.params
    return (
        <View style={{alignItems: "center", alignContent: "center"}}>
            <Text style={{fontSize:40, textAlign: "center"}}>Hey! You are viewing this supermarket: {supermarket.location} </Text>
        </View>
    )
}

Products.propTypes = {

}

export default Products
