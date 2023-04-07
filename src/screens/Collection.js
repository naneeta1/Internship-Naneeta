import { View, ScrollView } from 'react-native'
import React from 'react';
import Card from '../common/Card';

const Collection = () => {
  return (
    <ScrollView>
      <View>
        <Card imageSource={require('../images/nft1.png')} title={'Crypto#11'} price={'15$'} type={'Premium'}/>
        <Card imageSource={require('../images/nft2.png')} title={'Crypto#12'} price={'5$'} type={'Basic'}/>
        <Card imageSource={require('../images/nft3.png')} title={'Crypto#56'} price={'25$'} type={'Basic'}/>
        <Card imageSource={require('../images/nft4.png')} title={'Crypto#87'} price={'50$'} type={'Premium'}/>
        <Card imageSource={require('../images/nft5.png')} title={'Crypto#22'} price={'10$'} type={'Basic'}/>
        <Card imageSource={require('../images/nft6.png')} title={'Crypto#10'} price={'20$'} type={'Premium'}/>
        <Card imageSource={require('../images/nft7.png')} title={'Crypto#43'} price={'20$'} type={'Basic'}/>
        <Card imageSource={require('../images/nft8.png')} title={'Crypto#90'} price={'20$'} type={'Premium'}/>
        <Card imageSource={require('../images/nft9.png')} title={'Crypto#13'} price={'20$'} type={'Basic'}/>
        <Card imageSource={require('../images/nft10.png')} title={'Crypto#21'} price={'20$'} type={'Premium'}/>
        <Card imageSource={require('../images/nft11.png')} title={'Crypto#41'} price={'20$'} type={'Basic'}/>
        <Card imageSource={require('../images/nft12.png')} title={'Crypto#55'} price={'20$'} type={'Premium'}/>
      </View>
    </ScrollView>
  )
}

export default Collection
