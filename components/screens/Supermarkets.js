import React, { useEffect, useState } from 'react'
import { loadTokens } from '../../utility functions/asyncStorage'
var _ = require('lodash');
import AwesomeAlert from 'react-native-awesome-alerts';
import { StyleSheet, 
    View, 
    ScrollView
 } from 'react-native';
 import Message from '../Message'
import SmallWidget from '../SmallWidget';
import { getData } from '../../utility functions/queryFetch'
import { postData } from '../../utility functions/mutationFetch'



export let arrayOfLocations;

const Supermarkets = ({ navigation }) => {
    const [supermarkets, setSupermarkets] = useState([])
    const [alert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("Add to favourites?")
    const [supermarketId, setSupermarketId] = useState();
    const [showProgress, setShowProgress] = useState(false)

    /**
     * Navigates to the supermarket category 
     * screen selected by the user.
     * @param supermarket the shop pressed
     */

    const handlePickSupermarketPress = (supermarket) => {
        navigation.navigate('Categories', { supermarket })
    }


    /**
     * Navigates to the add supermarket 
     * screen when user presses it.
     */

    const handleAddSupermarketPress = () => {
        navigation.navigate('Add Supermarkets', { setSupermarkets })
    }


    /**
     * Makes the alert visible
     * by changing its state to true.
     */

    const showAlert = () => {
        setShowAlert(true)
    }


    /**
     * Makes the alert insivible 
     * by changing its state to false.
     */

    const hideAlert = () => {
        setShowAlert(false)
    }


    /**
     * Makes the alert invisible when 
     * the user presses the cancel button.
     */

    const cancelFavSupermarket = () => {
        hideAlert()
    }

    /**
     * Shows the alert with the name 
     * of the supermarket pressed and
     * saved its id in the state.
     * 
     * @param x the supermarket pressed
     */
    const handleDeleteFavShopLongPress = (x) => {
        setAlertMessage(`Delete ${x.name} on ${x.location} from favourites?`)
        showAlert()
        setSupermarketId(x.id)
    }

    /**
    * Deletes the supermarket chosen and
    * adds it to the 'add shop' screen.
    */

    const confirmDeleteFavShopLongPress = async function(supermarket) {   
        setSupermarketId(supermarket.id)
        postData(`{"query":"mutation {  removeUserSupermarkets(supermarketId: ${supermarketId}) {  email  }}"}`)
            .then(val =>  {
                setSupermarkets(supermarkets.filter(supermarket => supermarket.id !== supermarketId))
                setShowAlert(false)
        })
    }


    /**
     * Fetches all the bookmarked
     * supermarkets and displays them.
     */

    useEffect(() => {
        const getDataSync = async function() {
            getData(`{"query":"{user {supermarkets {id, name, location, image}}}"}`)
            .then(val =>  {
                setSupermarkets(val.user.supermarkets)
                arrayOfLocations = val.user.supermarkets.map(i => i.location)
        })
    }
        getDataSync()  
    }, [])


    return (
        <View style={styles.container} >
            <Message 
                passedStyle={styles.passedStyle}
                message='Time to pick a supermarket.'
            />
            <ScrollView >
                <View style={styles.scrollContainer}>
                    {supermarkets.map(supermarket => (
                    <SmallWidget 
                        onPress={() => {
                            handlePickSupermarketPress(supermarket)
                        }}
                        onLongPress={() => {
                            handleDeleteFavShopLongPress(supermarket)
                        }}
                        key={supermarket.location}
                        location={supermarket.location}
                        imageURL={supermarket.image} />
                    ))}
                    <SmallWidget 
                        onPress={handleAddSupermarketPress}
                        location="Add shop to favourites"
                        imageURL="https://res.cloudinary.com/gromceri-test/image/upload/v1621732129/Supermarkets/supermarket-add_xkglyn.png"/>
                   
                </View>
            </ScrollView>
            
            <AwesomeAlert 
                show={alert}
                showProgress={false}
                title="Delete supermarket"
                message={alertMessage}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Cancel"
                confirmText="Delete"
                confirmButtonColor="#d25960"
                onConfirmPressed={confirmDeleteFavShopLongPress}
                onCancelPressed={cancelFavSupermarket}
                titleStyle={{
                    fontSize: 25
                }}
                messageStyle={{
                    textAlign: 'center',
                    fontSize: 18
                }}
                cancelButtonTextStyle={{
                    fontSize: 18
                }}
                confirmButtonTextStyle={{
                    fontSize: 18
                }}
            />
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

    },

    passedStyle: {
        alignContent:'center',
        margin: 25,
        textAlign: 'center',
    }
})

Supermarkets.propTypes = {


}

export default Supermarkets