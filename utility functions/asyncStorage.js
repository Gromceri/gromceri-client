import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';

const storage = new Storage({
   storageBackend: AsyncStorage,
   defaultExpires: null, 
})


/**
 * @param token the token that keeps the user
 * logged in that is saved on his device
 * 
 * @param refreshToken the token that refreshes
 * the previous token after 30 minutes pass
 */
const saveTokens = (token, refreshToken) => {
    storage.save({
        key: 'tokens',
        data: {
            token: token,
            refreshToken: refreshToken
        },

    })
}

/**
 * Return the authentication tokens
 * @returns 
 */
const loadTokens = () => {
    return storage.load({
        key: 'tokens'
    })
    .then(res => {
        return res;
    })
    .catch(err => {
        console.log("didn't work lololololololololol")
    })    
}

module.exports = { saveTokens, loadTokens }