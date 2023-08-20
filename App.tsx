import 'react-native-gesture-handler'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Navigation from './src/presentation/navigaton/Navigation'

const App = () => {
  return (
    <Navigation/>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  }
})