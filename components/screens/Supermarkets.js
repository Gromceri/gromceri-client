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


export let arrayOfLocations;

const Supermarkets = ({ navigation }) => {
    const [supermarkets, setSupermarkets] = useState([])
    const [alert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("Add to favourites?")
    const [supermarketId, setSupermarketId] = useState();
    const [showProgress, setShowProgress] = useState(false)

    const handlePickSupermarketPress = (supermarket) => {
        navigation.navigate('Categories', { supermarket })
    }

    const showAlert = () => {
        setShowAlert(true)
    }

    const hideAlert = () => {
        setShowAlert(false)
    }

    const cancelFavSupermarket = () => {
        hideAlert()
    }

    const handleDeleteFavShopLongPress = (x) => {
        setAlertMessage(`Delete ${x.name} on ${x.location} from favourites?`)
        showAlert()
        setSupermarketId(x.id)
    }

    const confirmDeleteFavShopLongPress = async (supermarket) => {
        let token = (await loadTokens()).token
        setSupermarketId(supermarket.id)

        console.log(supermarket.id)

        const data = `{"query":"mutation {  removeUserSupermarkets(input: ${supermarketId}) {  email  }}"}`       
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
                    setSupermarkets(supermarkets.filter(supermarket => supermarket.id !== supermarketId))
                    setShowAlert(false)

                }) 
        }

    const handleAddSupermarketPress = () => {
        navigation.navigate('Add Supermarkets', { setSupermarkets })
    }

    useEffect(() => {
        const getDataSync = async function() {
            getData(`{"query":"{user {supermarkets {id, name, location, image}}}"}`)
            .then(val =>  {
                setSupermarkets(val.user.supermarkets)
                console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", val.user.supermarkets);
                arrayOfLocations = val.user.supermarkets.map(i => i.location)
        })
    }
        getDataSync()  
    }, [])



    return (
        <View style={styles.container} >
            <Message passedStyle={{
                    alignContent:'center',
                    margin: 25,
                    textAlign: 'center',
                }}
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
                        imageURL="https://res.cloudinary.com/gromceri-test/image/upload/v1621732129/supermarket-add_xkglyn.png"/>
                   
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

Supermarkets.propTypes = {


}

export default Supermarkets