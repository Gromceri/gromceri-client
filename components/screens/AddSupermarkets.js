import { getData } from '../../utility functions/queryFetch'
import { TouchableOpacity, StyleSheet, View, Text, Dimensions, Image, ScrollView, Alert } from 'react-native'
import Message from '../Message'
import SmallWidget from '../SmallWidget'
import React, { useEffect, useState } from 'react'
import { loadTokens } from '../../utility functions/asyncStorage'
import { arrayOfLocations } from './Supermarkets'
import AwesomeAlert from 'react-native-awesome-alerts';

const AddSupermarkets = ({ route }) => {
    const { setSupermarkets } = route.params

    const [allSupermarkets, setAllSupermarkets] = useState([])
    const [alert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("Add to favourites?")
    const [supermarketId, setSupermarketId] = useState();
    const [showProgress, setShowProgress] = useState(false)


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

    const handleAddFavShopPress = (x) => {
        setAlertMessage(`Add ${x.name} on ${x.location} to favourites?`)
        showAlert()
        setSupermarketId(x.id)
    }


   /**
    * Bookmarks the supermarket chosen and
    * adds it to the previous screen.
    */

    const confirmFavSupermarket = async () => {   
        let token = (await loadTokens()).token
        setShowProgress(true)    

        const data = `{"query":"mutation {  addUserSupermarkets(input: ${supermarketId}) {  email  }}"}`       
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
                    setAllSupermarkets(allSupermarkets.filter(supermarket => supermarket.id !== supermarketId))
                    setShowAlert(false)
                })
            getDataSync()    
        }
    
    /**
     * Fetches the data from the
     * previous screen so the user sees 
     * his newly bookmarked supermarket.
     */

    const getDataSync = async function() {
        getData(`{"query":"{user {supermarkets {id, name, location, image}}}"}`)
        .then(val =>  {
            setSupermarkets(val.user.supermarkets)
        })
    }


    /**
     * Fetches all the non-bookmarked
     * supermarkets and displays them.
     */

    useEffect(() => {
        const getAllDataSync = async function() {
            getData(`{"query":"{ nonFavouriteSupermarkets {  id, name, location, image }}"}`)
            .then(val =>  {
                setAllSupermarkets(val.nonFavouriteSupermarkets)
            })
        }
        getAllDataSync()
    }, [])


    return (
        <View style={styles.container}>
            <Message passedStyle={{
                    alignContent:'center',
                    margin: 25,
                    textAlign: 'center'
                }}
                message="Add a favourite supermarket." />
            <ScrollView >
                <View style={styles.scrollContainer}>
                    {allSupermarkets.map(supermarket => (
                        <SmallWidget 
                            key={supermarket.location}
                            location={supermarket.location}
                            onPress={() => {
                                handleAddFavShopPress(supermarket)
                            }}
                            imageURL={supermarket.image} />
                    ))}
                   
                </View>
            </ScrollView>
            <AwesomeAlert 
                show={alert}
                showProgress={showProgress}
                title="Add supermarket"
                message={alertMessage}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Cancel"
                confirmText="Add"
                confirmButtonColor="#d25960"
                onConfirmPressed={confirmFavSupermarket}
                onCancelPressed={cancelFavSupermarket}
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

    }
})

AddSupermarkets.propTypes = {
    

}

export default AddSupermarkets
