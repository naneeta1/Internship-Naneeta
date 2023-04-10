import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../common/Header'
import CoverImage from '../common/CoverImage'
import ProfileImage from '../common/ProfileImage'
import HotelTitle from '../common/HotelTitle'
import BookNowButton from '../common/BookNowButtton'
import ExpiringSoon from '../common/ExpiringSoon'

const HotelDetails = () => {
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
    <CoverImage />
    <HotelTitle />
    <BookNowButton />
    <ExpiringSoon />
    </View>
  )
}


export default HotelDetails