import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';

const storage = new Storage({
   storageBackend: AsyncStorage,
   defaultExpires: null, 
})

const saveTokens = (token, refreshToken) => {
    storage.save({
        key: 'tokens',
        data: {
            token: token,
            refreshToken: refreshToken
        },

    })
}

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