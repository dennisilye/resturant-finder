import React from 'react'
import { View,StyleSheet,Image,Text } from 'react-native'

export const CategoryItem = () => {
  return (
      <View style={styles.container}>
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={require('../assets/images/burger.png')}/>
          </View>
          <Text style={styles.header}>Burger</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        marginHorizontal: 25,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image : {
        width: 35,
        height: 35
    },
    imageContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 5

    },
    header: {
        fontWeight: 'bold'
    }

})
