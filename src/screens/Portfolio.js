import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import Header from '../common/Header';
import { useNavigation } from '@react-navigation/native';

import PortfolioTabs from './PortfolioTabs';

import SearchBar from '../common/SearchBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Portfolio = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header 
      leftIcon={require('../images/menu.png')} 
      rightIcon={require('../images/bell.png')} 
      title={'FORTRESS'}
      onClickLeftIcon={() => {
        navigation.openDrawer();
      }} />
 
      <SearchBar />
     {/*<View style={styles.content}>
        <PortfolioTabs />
      </View>*/}
     
      </View>
      
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  searchBarAndTabs: {
    flexDirection: 'column',
    justifyContent: 'center',
    
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
  }
})

export default Portfolio