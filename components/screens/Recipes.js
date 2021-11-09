import React from 'react'
import Message from '../Message'
import { View, ScrollView, StyleSheet } from 'react-native'

import RecipeList from '../RecipeList'

const Recipes = () => {
    return (
        <ScrollView style={styles.container}>
            <Message 
                message="I am the recipes tab"
                passedStyle={styles.passedStyle}
                />
            <RecipeList />
            
        </ScrollView>
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

export default Recipes
