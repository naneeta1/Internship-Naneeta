import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const HotelTitle = () => {
  return (
    <View style={{ alignItems: 'center', marginTop:67,backgroundColor:'white',width:"95%", paddingVertical:10,borderRadius:10 }}>
      <Text style={{ fontSize: 20, fontWeight: '600', color: '#1F2937' }}>Redison hotel</Text>
      <Text style={{ fontSize: 14, fontWeight: '500', color: '#4B5563' }}>Dubai</Text>
      <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ height: 30, borderRadius: 15, backgroundColor: 'black', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.25, shadowRadius: 1, elevation: 2, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: '600', color: 'white', backgroundColor:'black' }}>#157896</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, fontSize: 15, fontWeight: '400', color: '#6B7280', marginHorizontal: 10 }} numberOfLines={1}>0x9Af568442868356c7aE834A47614600002545476555555555772d9F5B87e9b</Text>
        <TouchableOpacity style={{ width: 24, height: 24, justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
          <Image source={require('../images/copy.png')} style={{ height:15, width:15 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HotelTitle;
