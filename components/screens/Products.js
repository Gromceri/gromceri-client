import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Text, ScrollView, Alert, Image } from 'react-native';
import Message from '../Message'
import UserSearchBar from '../UserSearchBar'
import { getData } from '../../utility functions/queryFetch'
import { postData } from '../../utility functions/mutationFetch'
import BigWidget from '../BigWidget'

let isFirstIteration = true;
let arr = [];
let green = '#3c7d19'
let grey = '#3c7d19'

const Products = ({ route, navigation }) => {
    
    const { supermarket, category } = route.params
    const imageURL = supermarket.image
    const [products, setProducts] = useState([])
    const [cart, setCart] =  useState([])
    const [isAdded, setIsAdded] = useState([])
    const [colour, setBorderColor] = useState([])
    const previousValues = useRef({ cart, products })

    /**
     * Adds a product to the card
     * and highlights it green in the menu
     * while persisting the colour.
     *
     * @param index the product index 
     * @param product the product details
     */
    const handleAddProductToCart = async (index, product) => {

        // loop over products at first iteration
        // and fill the colour array with grey
        console.log("It is the first iteration: ", isFirstIteration)
        for (var i = 0; (i < products.length && isFirstIteration); i++) {
            isAdded[i] = false;
            arr[i] = '#424141' 
        }

        // reset flag after first iteration
        isFirstIteration = false;

        // copy colour and boolean array to new
        // ones for state changes
        let newColours = [...colour]
        let newBooleans = [...isAdded]

        // if the product is not in the cart
        // add it on the server and change
        // the state arrays for highlighting
        if (!isAdded[index]) {
            postData(`{"query":"mutation { addProductToCart(productId: ${product.id}, count: 1) { email }}"}`)
            newColours[index] = "green"
            newBooleans[index] = true
            
            setIsAdded(newBooleans)
            setBorderColor(newColours)

        // if not, delete it in the same way
        } else {
            postData(`{"query":"mutation { removeProductFromCart(productId: ${product.id}, removeAll: true) { email }}"}`)
            newColours[index] = '#424141'
            newBooleans[index] = false
            
            setIsAdded(newBooleans)
            setBorderColor(newColours)
        }
    }


    /**
     * Before the screen is loaded, change
     * the widget colour to green if 
     * the product is already in the cart.
     */
    useEffect(() => {
        let newArr = []
        if (
          previousValues.current.cart !== cart &&
          previousValues.current.products !== products
        ) {
            // console.log("both changed")
            previousValues.current = { cart, products };
            // console.log("Sizes of arrays: ", cart.length, products.length)

            // make a new array containing the ids of the
            // products in the cart 
            let newCart = cart.map(c => c.product).map(c => c.id)

            for (let i = 0; i < products.length; i++) {
                newCart.includes(products[i].id) ? newArr[i] = '#3c7d19' : newArr[i] = '#424141'
            }
            
            // console.log(newArr)
            setBorderColor(newArr);
        }
      });



    /**
     * Gets the products from the server
     * filtering for the specific category
     * in the specific supermarket
     */
    useEffect(() => {
        const getProductsSync = async function() {
            const queryString = `{"query":"{  cartQuery: user { cart {  products {  product {  name id  }  }  }  }  productQuery: products(where: {  and: {  category: {  name: {  eq: \\"${category.name}\\"  }  }  productMetadata: {  all: {  supermarket: {  id: {  eq: ${supermarket.id}  }  }  }  }  }  }) {  name  image  id  productMetadata {  price  supermarket {  name  }  }  } }"}`

            getData(queryString)
            .then(val =>  {
                setProducts(val.productQuery)
                setCart(val.cartQuery.cart.products)
            })
        }
        getProductsSync()      
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.mediumContainer}>
                <View>
                    <Message 
                        message={category.name
                            .split(/(?=[A-Z])/).join(' ')}

                        passedStyle={{
                            alignContent:'center',
                            textAlign: 'center',
                            margin: 25,
                        }}/>
                    
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
                    {products.map((product, index) => (
                        <BigWidget
                            onPress={() => handleAddProductToCart(index, product)}
                            passedStyle={colour[index]}
                            key={product.id}
                            text={product.name}
                            image={product.image}
                            price={product.productMetadata
                                .map(productMetadata => productMetadata.price.toFixed(2))}/>
                    ))}
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
