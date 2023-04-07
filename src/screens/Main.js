import { View, Text ,Image} from 'react-native'
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Portfolio from './Portfolio';
import Dashboard from './Dashboard';
import Deals from './Deals';
import WhitePaper from './WhitePaper';


const Drawer = createDrawerNavigator();

const Main = () => {
 
  const person = () => {
    return (
      <Image source={require('../images/person.png')} style={{width: 24, height: 24}} />
    )
  }
  const analytics = () => {
    return (
      <Image source={require('../images/anlytics.png')} style={{width: 24, height: 24}} />
    )
  }
  const price = () => {
    return (
      <Image source={require('../images/price.png')} style={{width: 24, height: 24}} />
    )
  }
  const document = () => {
    return (
      <Image source={require('../images/document.png')} style={{width: 24, height: 24}} />
    )
  }

  return (
    <Drawer.Navigator 
      initialRouteName="Portfolio"
      drawerStyle={{
        backgroundColor: 'black',
        color:'#daa520'
      }}
      contentOptions= {{
        activeTintColor :'#ffffff',
        inactiveTintColor :'#1999CE',
        activeBackgroundColor :'#1999CE',
        inactiveBackgroundColor :'#ffffff',
      }}
    >
      <Drawer.Screen 
        name='Portfolio' 
        component={Portfolio} 
        options={{
          headerShown:false,
          drawerIcon: () => (
            person()
          ),
        }}
      />
      <Drawer.Screen 
        name='Dashboard' 
        component={Dashboard} 
        options={{
          headerShown:false,
          drawerIcon: () => (
           analytics()
          ),
        }}
      />
      <Drawer.Screen 
        name='Deals' 
        component={Deals} 
        options={{
          headerShown:false,
          drawerIcon: () => (
            price()
          ),
        }}
      />
      <Drawer.Screen 
        name='WhitePaper' 
        component={WhitePaper}
        options={{
          headerShown:false,
          drawerIcon: () => (
            document()
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default Main;
