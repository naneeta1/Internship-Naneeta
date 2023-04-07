import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const DropDownMenu = () => {
  const [selectedPage, setSelectedPage] = useState('SelectedPage');
  const [isClicked, setIsClicked] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>DropDown</Text>
      <TouchableOpacity style={styles.dropdownSelector} onPress={()=>{
        setIsClicked(!isClicked)
      }}>
        <Text>{selectedPage}</Text>
        <Image source={require('../images/nft1.png')}  style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}

export default DropDownMenu

const styles= StyleSheet.create({
  container:{
    flex:1,
    marginTop:100,
  },
  heading:{
    fontSize:20,
    fontWeight:700, 
    marginTop:80,
    alignSelf:'center',
  },
  dropdownSelector:{
    width:'90%',
    height:50,
    borderRadius:10,
    borderWidth:0.5,
    borderColor:'black',
    alignSelf:'center',
    marginTop:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15,

  },
  icon:{
    width:20, height:20,
  }


})