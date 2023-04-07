import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Collection from './Collection';
import History from './History';
import { Image, StyleSheet, Text, View } from 'react-native';
import More from './More';


const Tab = createBottomTabNavigator();

const PortfolioTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Collection"
      tabBarOptions={{
        inactiveTintColor: 'black',
        activeTintColor: 'black ',
        activeBackgroundColor:'goldenrod',
        labelStyle: styles.label,
        style: styles.tabBar,
      }}>
 {/*     <Tab.Screen
        name="Collection"
        component={Collection}
        options={{
          tabBarLabel: 'Collection',
          tabBarIcon:()=>{
            <Image source={require('../images/collection.png')} />
          }
        }}
      />*/}
      
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon:()=>{
            <Image source={require('../images/collection.png')} />
          }
          
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon:()=>{
            <Image source={require('../images/collection.png')} />
          },
          headerShown:false,
        }}
      />
    </Tab.Navigator>
  );
};



export default PortfolioTabs;
const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    borderTopWidth: 0,
    backgroundColor: '#fff',
    marginBottom: 6,
    paddingBottom:10,
    elevation: 0,
    
  },
  label: {
    fontSize: 22,
  },
});