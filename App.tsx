import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Explore from './screens/explore'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactList from './lessons/ContactList';

const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <ContactList />
      {/* <SafeAreaView style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Explore} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      </SafeAreaView> */}
    </NavigationContainer>

  )
}

function Settings(){
  return <View>
    <Text>Settings</Text>
  </View>
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    flex: 1
  }
})

export default App