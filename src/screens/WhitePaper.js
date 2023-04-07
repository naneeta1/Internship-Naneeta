import { View, Text } from 'react-native'
import React from 'react';
import Header from '../common/Header';
import { useNavigation } from '@react-navigation/native';
import DashboardCard from '../common/DashboardCard';
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from '../common/SearchBar';


const WhitePaper = () => {
   const navigation = useNavigation();
  return (

    <View>
    <Header 
    leftIcon={require('../images/menu.png')} 
    rightIcon={require('../images/bell.png')} 
    title={'FORTRESS'}
    onClickLeftIcon={() => {
      navigation.openDrawer();
    }} />
    <SearchBar />
    <ScrollView style={{marginTop:80}}>
   
   
    </ScrollView>
    </View>
  )
}

export default WhitePaper