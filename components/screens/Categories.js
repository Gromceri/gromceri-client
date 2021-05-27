import React from 'react'
import PropTypes from 'prop-types'
import { ImageBackground, StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import Message from '../Message'

const Categories = ({ route, navigation }) => {
    const { supermarket } = route.params
    const imageURL = supermarket.image

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
                    passedStyle={{
                    }}/>
                </View>
            </View>
            <ScrollView>
                <Text>Aaaaaa</Text>

            </ScrollView>
             
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center", 
        alignContent: "center",
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
