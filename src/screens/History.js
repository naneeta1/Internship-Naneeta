import { View, Text } from 'react-native'
import React from 'react';
import HistoryCard from '../common/HistoryCard';
import { ScrollView } from 'react-native-gesture-handler';

const History = () => {
  return (
 
      <View>
      <HistoryCard redeemed={'Redeem No 1'}  date={'march 22, 2022 at 10:26 pm'} price={'0.002 USDT'}/>
      <HistoryCard redeemed={'Redeem No 2'} date={'Feb 22, 2022 at 10:26 pm'} price={'1 USDT'}/>
      <HistoryCard redeemed={'Redeem No 3'} date={'Jan 22, 2022 at 10:26 pm'} price={'1.01 USDT'}/>
      </View>

    
  )
}

export default History