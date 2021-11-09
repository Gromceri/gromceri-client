import React from 'react'
import Message from '../Message'
import Form from "../Form"
import { View, Text, StyleSheet } from 'react-native'

export const AddProduct = () => {       
    return (
        <View style={styles.container}>
            <Message
                message="Hi, add a product to a supermarket"
                passedStyle={styles.passedStyle}/>

            <Form />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#313131',
      },

      passedStyle: {
        alignContent:'center',
        margin: 50,
        textAlign: 'center',
    }
})

export default AddProduct
