import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Image,
    TouchableOpacity,
    Button
 } from 'react-native';

 const image = {
    uri: "https://res.cloudinary.com/gromceri-test/image/upload/v1620929772/shopping-cart-icon_faw4ea.png"
  }
const Widget = ({ order, message, passedStyle }) => {
    return (
        <View>
            <TouchableOpacity style={[ styles.Widget, passedStyle ]}>

                <Text 
                    style={{color: '#dedede',
                        fontSize: 27.5
                    }}>
                    {message}
                </Text>

                <View
                    style={{backgroundColor: "#3e5dca",
                    borderRadius: 35,
                    borderColor: '#dedede',
                    borderWidth: 1
                    }}
                >
                    <Image 
                        source={image}
                        style={{ 
                            margin: 15,
                            padding: 15,
                        }}
                    />
                    
                </View>
            </TouchableOpacity>
        </View>
    )
}

export const styles = StyleSheet.create({
    Widget: {
        backgroundColor: '#424141',
        borderRadius: 15,
        justifyContent: 'space-evenly',
        padding: 10,
        width: '92%',
        height: 175,
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 15,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
}})

Widget.propTypes = {

}

export default Widget
