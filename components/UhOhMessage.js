import React from 'react'
import { Text, View, ScrollView, StyleSheet, Touchable } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';



const UhOhMessage = ({ message, iconName }) => {
    return (
        <View>
            <View style={styles.messageWidget}>
            <Ionicons 
                    name={iconName}
                    size={45}
                    style={{
                    textAlign: 'center',
                    padding: 0}}
                    color='#edc95e'>
                    
                </Ionicons>
                <Text style={{
                    color: '#d0d0d0',
                    fontSize: 18,
                    width: '65%',
                    textAlign: 'center',
                    lineHeight: 23,
                    justifyContent: 'space-evenly',
                }}>{message}</Text>
 
            </View>
            
        </View>
    )
}

 const styles = StyleSheet.create({
    messageWidget: {
        flex: 1,
        backgroundColor: '#424141',
        borderTopWidth: 5,
        borderBottomWidth: 5,
        flexDirection: 'row',

        borderColor: '#dcac29',
        borderRadius: 15,
        justifyContent: 'space-evenly',
        padding: 10,
        width: '90%',
        flexWrap: 'nowrap',
        height: 135,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
}})

export default UhOhMessage
