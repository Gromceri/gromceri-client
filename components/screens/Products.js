import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ScrollView, Alert, Image } from 'react-native';
import Message from '../Message'
import UserSearchBar from '../UserSearchBar'
import { getData } from '../../utility functions/queryFetch'
import Widget from '../Widget'



const Products = ({ route, navigation }) => {
    const { supermarket, category } = route.params
    const imageURL = supermarket.image
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProductsSync = async function() {
            const queryString = `{"query":"{ products(where: { category: {name: {eq: \\"${category.name}\\"}} supermarkets: { all: {  name: {  eq: \\"${supermarket.name}\\" }  } }}) {name supermarkets { name }  }}"}`
            console.log(queryString)
            getData(queryString)
            .then(val =>  setProducts(val.products))
            console.log(products)
        }
        getProductsSync()  
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.mediumContainer}>

                {/* <View style={styles.smallContainer}>
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
                </View> */}
                <View>
                    <Message 
                        message={category.name.split(/(?=[A-Z])/).join(' ')}
                        passedStyle={{
                            alignContent:'center',
                            textAlign: 'center',
                            margin: 25,
                        }}
                    />
                    
                    <UserSearchBar 
                        placeholderMessage="Search products..." 
                        // value={search}
                        // onChangeText={handleSearchUpdate}
                    />
                </View>
            </View>
            <ScrollView>
                <View 
                    style={styles.scrollContainer}>
                    {products.map(product => (
                        <Widget
                        onPress={() => {
                           Alert.alert("You pressed the product")
                        }}
                        key={product.id}
                        message={product.name}
                         />
                    ))}
                    <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                </View>
            </ScrollView>
             
        </View>
    )
}

Products.propTypes = {

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
        justifyContent: "space-evenly",
    },

    image: {
        width: "27.5%",
        height: 52.5,
        borderRadius: 10,
        margin: 15
    },
})

export default Products
