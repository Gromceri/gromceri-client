import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, 
    View, 
    Text,
    Image,
    TouchableOpacity,
 } from 'react-native';
import Message from './Message';

const BigWidget = ({ onPress, text, image, price }) => {
    return (
        <View>
            <TouchableOpacity 
            onPress={onPress}
            style={ styles.BigWidget }>
                <View style={ styles.PhotoContainer }>
                    <Image
                    style={{ width: "100%", height: "100%", borderRadius: 10}}
                    source={{
                        uri: image}}/>

                </View>

                <View style={ styles.TextContainer }>
                   <Message 
                        message={text}
                        passedStyle={{fontSize: 27.5}} />
                   <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>{price} {"\n"}weight{"\n"}location </Text>

                </View>

            </TouchableOpacity>
            
            
        </View>
    )
}

export const styles = StyleSheet.create({
    BigWidget: {
        backgroundColor: '#424141',
        borderRadius: 15,
        justifyContent: 'space-evenly',
        padding: 10,
        width: '92%',
        height: 250,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    PhotoContainer: {
        width: "40%",
        height: "70%",
    },

    TextContainer: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
    }
})


export default BigWidget