import { StyleSheet, View, ScrollView } from 'react-native'
import Message from '../Message'
import SmallWidget from '../SmallWidget'
import React, { useEffect, useState } from 'react'
import { getData } from '../../utility functions/queryFetch'
import { postData } from '../../utility functions/mutationFetch'
import AwesomeAlert from 'react-native-awesome-alerts';
import UhOhMessage from '../UhOhMessage'

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

    const handleAddFavShopPress = (supermarket) => {
        setAlertMessage(`Add ${supermarket.name} on ${supermarket.location} to favourites?`)
        showAlert()
        setSupermarketId(supermarket.id)
    }


   /**
    * Bookmarks the supermarket chosen and
    * adds it to the previous screen.
    */

    const confirmFavSupermarket = async function() {   
        postData(`{"query":"mutation {  addUserSupermarkets(supermarketId: ${supermarketId}) {  email  }}"}`)
            .then(val =>  {
                setAllSupermarkets(allSupermarkets.filter(supermarket => supermarket.id !== supermarketId))
                setShowAlert(false)
                getSupermarketsSync()    
        })
    }
    
    /**
     * Fetches the data from the
     * previous screen so the user sees 
     * his newly bookmarked supermarket.
     */

    const getSupermarketsSync = async function() {
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
        const getAllSupermarketsSync = async function() {
            getData(`{"query":"{ nonFavouriteSupermarkets {  id, name, location, image }}"}`)
            .then(val =>  {
                setAllSupermarkets(val.nonFavouriteSupermarkets)
            })
        }
        getAllSupermarketsSync()
    }, [])


    return (
        <View style={styles.container}>
            <Message passedStyle={passedStyle}
                message="Add a favourite supermarket." />
            <ScrollView >
                <View style={allSupermarkets[0] ? styles.scrollContainer : styles.scrollContainer2}>
                    {allSupermarkets[0] ? allSupermarkets.map(supermarket => (
                    <SmallWidget 
                        key={supermarket.location}
                        location={supermarket.location}
                        onPress={() => {
                            handleAddFavShopPress(supermarket)
                        }}
                        imageURL={supermarket.image} />
                    )) : <UhOhMessage 
                        message={'Looks like there are no supermarkets left to add.'}
                        iconName='alert-circle'/>}
                   
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
const passedStyle = {
    alignContent:'center',
    margin: 25,
    textAlign: 'center'
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
    scrollContainer2: {
        flex: 1,
        flexWrap: 'nowrap',
        justifyContent: "space-evenly",
    }
})

AddSupermarkets.propTypes = { 
    
}

export default AddSupermarkets
