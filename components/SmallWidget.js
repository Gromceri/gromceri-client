import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, View, Text, Dimensions, Image } from 'react-native'

const width = Dimensions.get('window').width
const SmallWidget = ({ name, location, imageURL, passedStyle }) => {
    return (
        <View style={styles.widgetContainer}>
            <TouchableOpacity style={styles.smallWidget }>
                <Image 
                    source={{
                        uri: imageURL
                    }}
                    style={styles.image}
                    />
                <Text style={styles.text}>{location}</Text>
                <Text style={styles.text}>{name}</Text>


            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    widgetContainer: {
        display: 'flex',
        width: (width / 2 - 7),
        alignContent: "center",


    },

    smallWidget: {
        backgroundColor: '#424141',
        borderRadius: 7,
        padding:10,
        height: 190,
        marginBottom: 5,
        justifyContent: 'space-between',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        elevation: 5,
    },

    image: {
        width: "80%",
        height: "45%",
        borderRadius: 10,
        margin: 15
    },

    text: {
        fontSize: 22,
        color: '#d5d5d5',
        textAlign: 'center',
    }
})


SmallWidget.propTypes = {

}

export default SmallWidget
