import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import DealCard from '../common/DealCard';

const Available = () => {
  return (
    <ScrollView >
    <View>
     <DealCard title={'Dubai'} imageSource={require('../images/nft1.png')} hotel={'Redison hotel'} artworks={'3 artworks'}/>
     <DealCard title={'NYC'} imageSource={require('../images/nft1.png')} hotel={'Four seasons'} artworks={'3 artworks'}/>
     <DealCard title={'Abu Dhabi'} imageSource={require('../images/nft1.png')} hotel={'Movinpick'} artworks={'3 artworks'}/>
     <DealCard title={'Paris'} imageSource={require('../images/nft1.png')} hotel={'MovinPick'} artworks={'3 artworks'}/>
     <DealCard title={'Lisbon'} imageSource={require('../images/nft1.png')} hotel={'Redison blue'} artworks={'3 artworks'}/>
     <DealCard title={'Karachi'} imageSource={require('../images/nft1.png')} hotel={'Fair Mount'} artworks={'3 artworks'}/>
     <DealCard title={'Islamabad'} imageSource={require('../images/nft1.png')} hotel={'Intutive hotel'} artworks={'3 artworks'}/>
     <DealCard title={'Dubai'} imageSource={require('../images/nft1.png')} hotel={'Fair Mount'} artworks={'3 artworks'}/>
    </View>
    </ScrollView>
  )
}

export default Available;