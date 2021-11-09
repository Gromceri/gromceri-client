import React from 'react'
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { postData } from '../utility functions/mutationFetch';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Form = () => {

    const [product, setProduct] = useState()

    /**
     * Adds an unverified product to the list
     * such that it can be verified and 
     * accepted or discarded.
     * 
     * @param values the values that the
     * user has inputted in the text fields
     */
    const addProductSync = async function(values) {
      postData(`{"query":"mutation {createProduct(product: { name: \\"${values.name}\\", price: ${values.price}, category: ${values.category}, supermarket: ${values.supermarket} }) {  unverifiedProductMetadata { id, price }}}"}`)

      .then(val =>  {
          setProduct(val.createProduct
                        .unverifiedProductMetadata.map(p => p.id))
      })
      .catch(err => {
        console.log(err)
      })
    }
  
    return (
        <View>
            <Formik
              initialValues={{ name: '', category: '', price: null, supermarket: null }}
              onSubmit={() => addProductSync()}
              >

              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>

                  <TextInput style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="grey"
                    onChangeText={handleChange('name')}
                    value={values.name}
                  />

                  <TextInput style={styles.input}
                    placeholder="Category"
                    placeholderTextColor="grey"
                    onChangeText={handleChange('category')}
                    value={values.category}
                  />

                  <TextInput style={styles.input}
                    placeholder="Price"
                    placeholderTextColor="grey"
                    onChangeText={handleChange('price')}
                    value={values.price}
                  />

                  <TextInput style={styles.input}
                    placeholder="Supermarket"
                    placeholderTextColor="grey"
                    onChangeText={handleChange('supermarket')}
                    value={values.supermarket}
                  />
                  <Button
                    style={styles.button} 
                    onPress={() => addProductSync(values)} title="Submit" />
                </View>
              )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
  input: {
    alignSelf:"center",
    borderColor: "white",
    borderWidth: 1,
    height: 50,
    margin: 10,
    width: "80%",
    color: "white",
    padding: 15,
  },

  button: {
    
    width: "50%",
  }

})

export default Form
