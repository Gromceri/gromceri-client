import {loadTokens } from './asyncStorage'

/**
 * Utility function to update server data.
 * Used for POST, PUT methods (mutations).
 * @param queryString the query used to update the data
 * @returns the updated and fetched from the response
 */

export const postData = async (queryString) => {
    let token = (await loadTokens()).token
    
    const data = queryString      
    const payload = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
        body: data
    };

    return fetch('https://gromceritestbackend2.herokuapp.com/graphql', payload)
            .then(response => response.json())
            .then(res => {
                const specificData = res.data
                return specificData
            }) 
} 