import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react';
import Header from '../common/Header';
import { useNavigation } from '@react-navigation/native';

import PortfolioTabs from './PortfolioTabs';

import SearchBar from '../common/SearchBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';


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
      <View style={styles.content}>
        <PortfolioTabs />
      </View>
      {/**/}
      </View>
     
      
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  content: {
    flex: 1,
  },
  img:{
    height:25,
    width:25,
    marginHorizontal:5,
  },
  social:{
    display:'flex',
    flexDirection:'row',
    fontSize:20,
    marginVertical:5
  },
  socialText:{
    fontSize:15,
  }
})

export default Portfolio