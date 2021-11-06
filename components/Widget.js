import React from 'react'
import { StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
 } from 'react-native';
 import { Ionicons } from '@expo/vector-icons';


 const image = {
    uri: "https://res.cloudinary.com/gromceri-test/image/upload/v1620929772/shopping-cart-icon_faw4ea.png"
  }
const Widget = ({ order, message, passedStyle, iconName, iconBackgroundColor, onPress }) => {
    return (
        <View>
            <TouchableOpacity 
                style={[ styles.Widget, passedStyle ]}
                onPress={onPress}>

                <Text 
                    style={{ color: '#dedede',
                        fontSize: 27.5 }}>
                    {message}
                </Text>

                <View
                    style={{backgroundColor: iconBackgroundColor,
                    borderRadius: 100,
                    borderColor: '#dedede',
                    borderWidth: 0,
                }}>
                    <Ionicons 
                        name={iconName}
                        style={{fontSize: 35,
                        padding: 15,
                        textAlign: 'center',
                        }}
                        color='white'>
                    </Ionicons>
                    
                </View>
            </TouchableOpacity>
        </View>
    )
}

export const styles = StyleSheet.create({
    Widget: {
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
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
}})

Widget.propTypes = {

}

export default Widget
