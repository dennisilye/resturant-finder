import React from 'react'
import { View,Text,StyleSheet,TextInput } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'


export const Search = () => {
  return (
      <View style={styles.container}>
          <FontAwesome name='search' size={25}/>
          <TextInput
          style={styles.input}
          placeholder='Resturants, Food'
          />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: 'black',
        borderRadius: 40,
        padding: 15
    },
    input: {
        marginLeft: 10,
        fontSize: 18
    }
})