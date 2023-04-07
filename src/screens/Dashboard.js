import { View, Text } from 'react-native'
import React from 'react';
import Header from '../common/Header';
import { useNavigation } from '@react-navigation/native';
import DashboardCard from '../common/DashboardCard';
import { ScrollView } from 'react-native-gesture-handler';


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
        <DashboardCard title={'MARKET CAP'} eths={'129 ETH'} price={'1,11,032.24 USD'} percent={'+12.5%'} imageSource={require('../images/marketcap.png')} />
        <DashboardCard title={'ASSETS'} eths={'1.2345 USDT'} price={'1032.24 USD'} percent={''} imageSource={require('../images/assets.png')} />
        <DashboardCard title={'TRESSURY'} eths={'2,000,122 USDT'} price={'2,100,010 USD'} percent={''} imageSource={require('../images/tressury.png')} />
        <DashboardCard title={'OTHER'} eths={'99,922 USDT'} price={'100,010 USD'} percent={''} imageSource={require('../images/other.png')} />
    </View>
   
    </ScrollView>
    </View>
  )
}

export default Dashboard