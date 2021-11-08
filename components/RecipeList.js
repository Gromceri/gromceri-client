import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { getData } from '../utility functions/queryFetch'
import { useEffect, useState } from 'react'
import BigWidget from './BigWidget'


const RecipesList = () => {
    const [recipes, setRecipes] = useState([])

    /**
     * Fetches the recipes from the 
     * server and displays them.
     */
    useEffect(() => {
        const getRecipesSync = async function() {
            getData(`{"query":" {recipes { name, price , image, products { name }}}"}`)
            .then(val =>  {
                console.log(val)
                setRecipes(val.recipes)
        })
    }
    getRecipesSync()  

    }, [])
    return (
        <ScrollView style={styles.container}>
            {recipes.map(recipe => 
                <BigWidget key={recipe.name}
                    image={recipe.image}
                    text={recipe.name}
                    price={recipe.price}/>
                )}


            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",

    }
})

export default RecipesList
