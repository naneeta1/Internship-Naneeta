import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Available from './Available';
import DashboardHistory from './DashboardHistory';
import Booked from './Booked';
import Upcoming from './Upcoming';

import { StyleSheet } from 'react-native';
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
            <Ionicons name="albums-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Booked"
        component={Booked}
        options={{
          tabBarLabel: 'Booked',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          tabBarLabel: 'Upcoming',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
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
            <Ionicons name="time-outline" size={size} color={color} />
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
    elevation: 0,
    
  },
  label: {
    fontSize: 18,
    alignSelf:'center',
    marginBottom:10
  },
});

export default DealsTabs;
