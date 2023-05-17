import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Explore from './screens/explore'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactList from './lessons/ContactList';
import ImageLibrarySample from './lessons/ImageLibrarySample';
import Dashboard from './lessons/multiLanguage/Dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from './lessons/multiLanguage/ProductDetail';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


const App = () => {

  return (
 
 <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Detail" component={ProductDetail} />

      </Stack.Navigator>
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