import { View, Text } from 'react-native'
import React from 'react';
import Header from '../common/Header';
import { useNavigation } from '@react-navigation/native';
import DashboardCard from '../common/DashboardCard';
import { ScrollView } from 'react-native-gesture-handler';
import DashboardProfile from '../common/DashboardProfile';
import Assets from '../common/Assets';


const Dashboard = () => {
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
    <ScrollView style={{marginTop:80}}>
    <View>
      <DashboardProfile />
    </View>
    <ScrollView horizontal={true}>
        <DashboardCard title={'MARKET CAP'} eths={'129 ETH'} price={'1,11,032.24 USD'} percent={'+12.5%'} imageSource={require('../images/marketcap.png')} />
        <DashboardCard title={'ASSETS'} eths={'1.2345 USDT'} price={'1032.24 USD'} percent={''} imageSource={require('../images/assets.png')} />
        <DashboardCard title={'TRESSURY'} eths={'2,000,122 USDT'} price={'2,100,010 USD'} percent={''} imageSource={require('../images/tressury.png')} />
        <DashboardCard title={'OTHER'} eths={'99,922 USDT'} price={'100,010 USD'} percent={''} imageSource={require('../images/other.png')} />
    </ScrollView>
       <Assets title={'Dubai'} amount={'1,000,100'} imageSource={require('../images/nft1.png')} hotel={'Redison hotel'}/>
       <Assets title={'NYC'} amount={'1,000,100'} imageSource={require('../images/nft1.png')} hotel={'Redison hotel'}/>
       <Assets title={'Abu Dhabi'} amount={'1,000,100'} imageSource={require('../images/nft1.png')} hotel={'Redison hotel'}/>
       <Assets title={'Paris'} amount={'1,000,100'} imageSource={require('../images/nft1.png')} hotel={'Redison hotel'}/>
       <Assets title={'LISBON'} amount={'1,000,100'} imageSource={require('../images/nft1.png')} hotel={'Redison hotel'}/>
       <Assets title={'KARACHI'} amount={'1,000,100'} imageSource={require('../images/nft1.png')} hotel={'Redison hotel'}/>
       <Assets title={'ISLAMABAD'} amount={'1,000,100'} imageSource={require('../images/nft1.png')} hotel={'Redison hotel'}/>
       <Assets title={'Dubai'} amount={'1,000,100'} imageSource={require('../images/nft1.png')} hotel={'Redison hotel'}/>
       <Assets title={'Dubai'} amount={'1,000,100'} imageSource={require('../images/nft1.png')} hotel={'Redison hotel'}/>
       <Assets title={'Dubai'} amount={'1,000,100'} imageSource={require('../images/nft1.png')} hotel={'Redison hotel'}/>
   
    </ScrollView>
    </View>
  )
}

export default Dashboard