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
                placeholder={placeholderMessage}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}
export const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: 'gray',
        borderRadius: 50,

        borderWidth: 0,
        marginTop: 7.5,
        padding: 0
    },
    inputContainerStyle: {
        borderRadius: 50,
        backgroundColor: 'white'
    },

})

UserSearchBar.propTypes = {
    

}

export default UserSearchBar
