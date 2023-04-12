import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Explore from './screens/explore'
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Explore/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    flex:1
  }
})

export default App