import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppNavigator from './src/AppNavigator'

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
