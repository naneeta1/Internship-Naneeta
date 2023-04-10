import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Available from './Available';
import DashboardHistory from './DashboardHistory';
import Booked from './Booked';
import Upcoming from './Upcoming';

import { StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import More from './More';


const Tab = createBottomTabNavigator();

const DealsTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Collection"
      tabBarOptions={{
        activeTintColor: 'goldenrod',
        labelStyle: styles.label,
        style: styles.tabBar,
      }}>
      <Tab.Screen
        name="Available"
        component={Available}
        options={{
          tabBarLabel: 'Available',
          tabBarIcon: ({ color, size }) => (
            <Image style={{height:30,width:30}} source={require('../images/available.png')}/>
          ),
        }}
      />
      <Tab.Screen
        name="Booked"
        component={Booked}
        options={{
          tabBarLabel: 'Booked',
          tabBarIcon: ({ color, size }) => (
            <Image style={{height:30,width:30}} source={require('../images/booked.png')}/>
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          tabBarLabel: 'Upcoming',
          tabBarIcon: ({ color, size }) => (
            <Image style={{height:30,width:30}} source={require('../images/upcoming.png')}/>
          ),
          headerShown:false,
        }}
      />
      <Tab.Screen
        name="My History"
        component={DashboardHistory}
        options={{
          tabBarLabel: 'My History',
          tabBarIcon: ({ color, size }) => (
            <Image style={{height:30,width:30}} source={require('../images/history.png')}/>
          ),
          headerShown:false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    borderTopWidth: 0,
    backgroundColor: '#fff',
    marginBottom: 6,
    paddingBottom:10,
    elevation: 0,paddingVertical:10,
    
  },
  label: {
    fontSize: 18,
    alignSelf:'center',
    
  },
});

export default DealsTabs;
