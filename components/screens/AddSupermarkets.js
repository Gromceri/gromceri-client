import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, View, Text, Dimensions, Image, ScrollView, Alert } from 'react-native'
import Message from '../Message'
import SmallWidget from '../SmallWidget'
import React, { useEffect, useState } from 'react'
import { loadTokens } from '../../utility functions/asyncStorage'
import { arrayOfLocations } from './Supermarkets'
import AwesomeAlert from 'react-native-awesome-alerts';
import { set } from 'react-native-reanimated'

const AddSupermarkets = () => {
    const [allSupermarkets, setAllSupermarkets] = useState([])
    const [alert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("Add to favourites?")
    
    const handleAddFavShopPress = (x) => {
        setAlertMessage(`Add ${x.name} on ${x.location} to favourites?`)
        showAlert()
    }

    const confirmFavSupermarket = () => {

    }

    const showAlert = () => {
        setShowAlert(true)
    }

    const hideAlert = () => {
        setShowAlert(false)
    }



    useEffect(() => {
        let isCancelled = false;
        const getAllSupermarkets = async () => {
            if (!isCancelled) {
                let token = (await loadTokens()).token
            
            
            const data = `{"query":"{ nonFavouriteSupermarkets {  id, name, location, image }}"}`
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
                        setAllSupermarkets(res.data.nonFavouriteSupermarkets)
                    })
            }
        }
        getAllSupermarkets()
        
        return () => {
            isCancelled = true;
        };

    }, [])

    return (
        <View style={styles.container}>
            <Message passedStyle={{
                    alignContent:'center',
                    margin: 25,
                    textAlign: 'center'
                }}
                message="your mom" />
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
                showProgress={false}
                title="Add supermarket"
                message={alertMessage}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText="Yes, delete it"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={confirmFavSupermarket}
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
