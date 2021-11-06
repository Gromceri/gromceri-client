import React from 'react'
import PropTypes from 'prop-types'
import { SearchBar } from 'react-native-elements';
import { ImageBackground, StyleSheet, Text, View, Button, Image, ScrollView, Alert } from 'react-native';


const UserSearchBar = ({ placeholderMessage, value, onChangeText }) => {
    return (
        <View>
            <SearchBar 
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.searchBarContainer}
                placeholderTextColor='#d0d0d0'
                searchIcon={{color: '#d0d0d0'}}
                placeholder={placeholderMessage}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}
export const styles = StyleSheet.create({
    searchBarContainer: {
        width: "auto",
        backgroundColor: '#d25960',
        borderRadius: 50,
        borderWidth: 1,
        borderRightColor: '#d25960',
        borderLeftColor: '#d25960',

        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        marginTop: 15,
        padding: 1, 
    },
    inputContainerStyle: {
        borderRadius: 50,
        backgroundColor: '#424141',
        
    },

})

UserSearchBar.propTypes = {
    

}

export default UserSearchBar
