import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Available from './Available';
import DashboardHistory from './DashboardHistory';
import Booked from './Booked';
import Upcoming from './Upcoming';

import { StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import More from './More';
import Collection from './Collection';
import History from './History';



const Tab = createBottomTabNavigator();

const PortfolioTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Collection"
      tabBarOptions={{
        activeTintColor: 'goldenrod',
        labelStyle: styles.label,
        style: styles.tabBar,
      }}>
      <Tab.Screen
        name="Collection"
        component={Collection}
        options={{
          tabBarLabel: 'Collection',
          tabBarIcon: ({ color, size }) => (
            <Image style={{height:30,width:30}} source={require('../images/collection.png')}/>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../images/history.png')} style={{height:30,width:30}} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'Acount',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../images/account.png')} style={{height:30,width:30}} />
          ),
          headerShown:false,
        }}
      />
      
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    borderTopWidth: 0,
    backgroundColor: '#fff',
    marginBottom: 6,
    paddingBottom:15,
    elevation: 0,
    paddingTop:50,
    
  },
  label: {
    fontSize: 18,
    alignSelf:'center',
    
  },
});

export default PortfolioTabs;
