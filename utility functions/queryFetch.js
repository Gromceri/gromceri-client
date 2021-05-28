import {loadTokens } from './asyncStorage'

/**
 * Utility function to query data from the server.
 * Used for GET methods, does not do mutations.
 * @param queryString the query used to fetch the data
 * @returns the data fetched from the response
 */

export const getData = async (queryString) => {
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
                console.log("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", specificData);
                return specificData
            }) 
} 