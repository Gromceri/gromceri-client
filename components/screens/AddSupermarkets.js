import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, View, Text, Dimensions, Image, ScrollView, Alert } from 'react-native'
import Message from '../Message'
import SmallWidget from '../SmallWidget'
import React, { useEffect, useState } from 'react'
import { loadTokens } from '../../utility functions/asyncStorage'
import { arrayOfLocations } from './Supermarkets'
import AwesomeAlert from 'react-native-awesome-alerts';

const AddSupermarkets = ({ route }) => {
    const { getSupermarkets } = route.params

    const [allSupermarkets, setAllSupermarkets] = useState([])
    const [alert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("Add to favourites?")
    const [supermarketId, setSupermarketId] = useState();
    const [showProgress, setShowProgress] = useState(false)

 
    const handleAddFavShopPress = (x) => {
        setAlertMessage(`Add ${x.name} on ${x.location} to favourites?`)
        showAlert()
        setSupermarketId(x.id)
    }

    const cancelFavSupermarket = () => {
        hideAlert()
    }

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
                    console.log(supermarketId)
                    setAllSupermarkets(allSupermarkets.filter(supermarket => supermarket.id !== supermarketId))
                setShowAlert(false)
                console.log("Add supermarket request")
                })
        getSupermarkets()
                
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
