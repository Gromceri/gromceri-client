import React, { useEffect, useState } from 'react'
import { loadTokens } from '../../utility functions/asyncStorage'
import PropTypes from 'prop-types'
import { ImageBackground, StyleSheet, Text, View, Button, Image, ScrollView, Alert } from 'react-native';
import Message from '../Message'
import SmallWidget from '../SmallWidget';

const Categories = ({ route, navigation }) => {
    const { supermarket } = route.params
    const imageURL = supermarket.image
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        let token = (await loadTokens()).token
        
        const data = `{"query":" {productCategories {id, name, image}}"}`       
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
                    console.log(res.data.productCategories)
                    setCategories(res.data.productCategories)
                })
            
    }
    useEffect(() => {
        let isCancelled = false;
        getCategories()
        
        return () => {
            isCancelled = true;
        };

    }, [])
    return (
        <View style={styles.container}>
            <View style={{marginTop: 5, marginBottom: 25, marginRight: 20, marginLeft: 20, display: "flex", alignItems: 'center'}}>
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
                    <Message message="searching for..."
                    />
                </View>
            </View>
            <ScrollView>
                <View style={styles.scrollContainer}>
                <SmallWidget 
                        onPress={() => {
                            Alert.alert("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
                        }}
                        location="Browse all"
                        imageURL="https://res.cloudinary.com/gromceri-test/image/upload/v1622160078/Food%20categories/all_hkffhp.jpg"
                    />
                    {categories.map(categories => (
                        <SmallWidget 
                            onPress={() => {
                                Alert.alert("BITHCHHHHHHHHHHHHHH")
                            }}
                            key={categories.id}
                            location={categories.name.split(/(?=[A-Z])/).join(' ')}
                            imageURL={categories.image} />
                    ))}
                    
                
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

Categories.propTypes = {


}

export default Categories
