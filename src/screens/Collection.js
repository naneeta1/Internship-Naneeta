import { View, ScrollView,Text ,StyleSheet,Image} from 'react-native'
import React from 'react';
import Card from '../common/Card';

const Collection = () => {
  return (
    
      <View>
        <ScrollView>
        <Card imageSource={require('../images/nft1.png')}  title={'Crypto#11'} price={'15$'} type={'Premium'}/>
        <Card imageSource={require('../images/nft1.png')}  title={'Crypto#12'} price={'5$'} type={'Basic'}/>
        <Card imageSource={require('../images/nft1.png')} title={'Crypto#56'} price={'25$'} type={'Basic'}/>
        <Card imageSource={require('../images/nft1.png')} title={'Crypto#87'} price={'50$'} type={'Premium'}/>
        <Card imageSource={require('../images/nft1.png')} title={'Crypto#22'} price={'10$'} type={'Basic'}/>
        <Card imageSource={require('../images/nft1.png')} title={'Crypto#10'} price={'20$'} type={'Premium'}/>
        <Card imageSource={require('../images/nft1.png')}  title={'Crypto#43'} price={'20$'} type={'Basic'}/>
        <Card imageSource={require('../images/nft1.png')} title={'Crypto#90'} price={'20$'} type={'Premium'}/>
        <Card imageSource={require('../images/nft1.png')} title={'Crypto#13'} price={'20$'} type={'Basic'}/>
        <Card imageSource={require('../images/nft1.png')}  title={'Crypto#21'} price={'20$'} type={'Premium'}/>
        <Card imageSource={require('../images/nft1.png')} title={'Crypto#41'} price={'20$'} type={'Basic'}/>
        <Card imageSource={require('../images/nft1.png')} title={'Crypto#55'} price={'20$'} type={'Premium'}/>
        
        <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>DESCRPTION</Text>
      <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</Text>
      <Text style={{fontSize:20, fontWeight:'bold', color:'black', marginTop:10}}>SOCIAL</Text>
      <View style={styles.social}>
        <Image source={require('../images/insta.png')} style={styles.img} />
        <Text style={styles.socialText}>@dontbesovasya</Text>
      </View>
      <View style={styles.social}>
        <Image source={require('../images/snap.png')} style={styles.img} />
        <Text style={styles.socialText}>@dontbesovasya</Text>
      </View>
      <View style={styles.social}>
        <Image source={require('../images/facebook.png')} style={styles.img} />
        <Text style={styles.socialText}>@dontbesovasya</Text>
      </View>
      <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>LINKS </Text>
      <Text style={styles.socialText}>https://dontbesovasya.io</Text>
      <Text style={styles.socialText}>https://dontbesovasya.io</Text>
    <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>JOINED NOVEMBER 2021 </Text>
        </ScrollView>
      </View>
  
  )
}

export default Collection;
const styles = StyleSheet.create({
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
