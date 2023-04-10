import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Main from '../screens/Main';
import Notifications from '../screens/Notifications';
import HotelDetails from '../screens/HotelDetails';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>
            <Stack.Screen name='Notification' component={Notifications} options={{headerShown:true}} />
            <Stack.Screen name='HotelDetails' component={HotelDetails} options={{headerShown:false}} />
            
        </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default AppNavigation