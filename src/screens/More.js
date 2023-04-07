import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react';
import KeyCard from '../common/KeyCard';
import ListItem from '../common/ListItem';
import { ScrollView } from 'react-native-gesture-handler';
import Bookings from '../common/Bookings';

const More = () => {
  return (
    <ScrollView>
    <View>
      <View>
        <Image source={require('../images/nft1.png')} style={styles.img} />
        <Text style={styles.text}>TOTAL VALUE</Text>
        <Text style={styles.text}>$10,86,000</Text>
        <KeyCard code={'#157896'} />
      </View>
     <View style={{marginVertical:20}}>
        <ListItem imageSource={require('../images/nft.png')} title={`MY NFT'S`} value={'6'} />
        <ListItem imageSource={require('../images/dollar.png')} title={'REDEEMED'} value={'$215.43'} />
        <ListItem imageSource={require('../images/claim.png')} title={'NEXT CLAIM'} value={'$150.60'} />
  </View>
      <View>
        <Bookings count={12} title={'MY BOOKINGS'}  />
        <Bookings count={2} title={'PAST BOOKINGS'}  />
  </View> 
      <View> 
        <Text style={{color:'black',fontWeight:'bold'}}>ABOUT FORTIFY</Text>
        <Text style={{color:'gray'}}>Welcome to Forify Investments, your claim value will be open with respect to our assets value. It is not time bassed. THANK YOU</Text>
      </View>

    </View>
    </ScrollView>
  )
}

export default More;

const styles = StyleSheet.create({
  img:{
    width:100,
    height:100,
    alignSelf:'center',
    borderRadius:50,
    marginTop:10,
    borderColor:'black',
  },
  text:{
    alignSelf:'center',
    fontSize:20,
    marginVertical:5,
  }
});