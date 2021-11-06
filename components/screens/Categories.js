import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, ScrollView, Alert } from 'react-native';
import Message from '../Message'
import SmallWidget from '../SmallWidget';
import UserSearchBar from '../UserSearchBar'
import { getData } from '../../utility functions/queryFetch'

/**
 * Categories screen. 
 */

const Categories = ({ route, navigation }) => {
    const { supermarket } = route.params
    const imageURL = supermarket.image

    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([]);


    /**
     * Sets the search to the string input.
     * @param s the search string
     */
    const handleSearchUpdate = (s) => {
        setSearch(s)
    }


    /**
     * Navigates to the supermarket
     * specific products.
     * @param category the category the
     * user wants to view products for 
     */
    const handleCategoryPress = (category) => {
        navigation.navigate('Products', { supermarket, category })
    }


    /**
     * useEffect hook that fires with each
     * user input search in the search bar.
     * Used for filtering the categories.
     */
    useEffect(() => {
        const results = categories
            .filter(category => category.name
            .toLowerCase().includes(search))

        setSearchResults(results)
    }, [search])


    /**
     * useEffect hook that fires on render.
     * Uses getData utility function to fetch
     * and display the data from the server.
     * Used to get the product categories.
     */
    useEffect(() => {
        const getDataSync = async function() {
            getData(`{"query":" {productCategories {name, image}}"}`)
            .then(val =>  setCategories(val.productCategories))
        }
        getDataSync()  
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.mediumContainer}>
                <View style={styles.smallContainer}>
                    <Message 
                        message="I am going to"
                        passedStyle={{
                            alignContent:'center',
                            textAlign: 'center'}} />
                    <Image 
                        source={{
                            uri: imageURL
                        }}
                        style={styles.image}
                    />
                </View>

                <View>
                    <Message 
                        message="searching for..."
                    />
                    <UserSearchBar 
                        placeholderMessage="Search categories" 
                        value={search}
                        onChangeText={handleSearchUpdate}
                    />
                </View>
            </View>
            
            <ScrollView>
                <View 
                    style={styles.scrollContainer}>
                    <SmallWidget 
                        onPress={() => {
                            Alert.alert("browse all")
                        }}
                        location="Browse all"
                        imageURL="https://res.cloudinary.com/gromceri-test/image/upload/v1622160078/Food%20categories/all_hkffhp.jpg"
                    />
                    {!search ? categories.map(categories => (
                    <SmallWidget 
                        onPress={() => {
                            handleCategoryPress(categories)
                        }}
                        key={categories.name}
                        location={categories.name.split(/(?=[A-Z])/).join(' ')}
                        imageURL={categories.image} /> )) 

                        : searchResults.map(results => (
                    <SmallWidget 
                        onPress={() => {
                            handleCategoryPress(results)
                        }}
                        key={results.name}
                        location={results.name.split(/(?=[A-Z])/).join(' ')}
                        imageURL={results.image} /> )) 
                    }
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

    mediumContainer: {
        marginTop: 5, 
        marginBottom: 25, 
        marginRight: 20, 
        marginLeft: 20, 
        display: "flex", 
        alignItems: 'center'
    },

    smallContainer: {
        display: "flex", 
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",

    },
    scrollContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-evenly",
    },

    image: {
        width: "27.5%",
        height: 52.5,
        borderRadius: 10,
        margin: 15
    },
})

export default Categories
