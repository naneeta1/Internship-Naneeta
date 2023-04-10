import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ExpiringSoon = () => {
  return (
    <View style={{ borderWidth: 1, borderColor: '#ddd', paddingVertical: 5 }}>
      <Text style={{ fontSize: 17, fontWeight: 'bold', textTransform: 'uppercase', color: '#333' }}>Expiring soon</Text>
      <View style={{ marginTop: 5 }}>
        <TouchableOpacity style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 20, padding: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 40, alignItems: 'center',marginHorizontal:15 }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>01</Text>
                
                <Text style={{ color: '#aaa', fontSize: 14 }}>Days</Text>
              </View>
              <View style={{ width: 40, alignItems: 'center',marginHorizontal:15, }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>23</Text>
                
                <Text style={{ color: '#aaa', fontSize: 14 }}>Hours</Text>
              </View>
              <View style={{ width: 40, alignItems: 'center',marginHorizontal:15, }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>02</Text>
                
                <Text style={{ color: '#aaa', fontSize: 14 }}>Min</Text>
              </View>
              <View style={{ width: 40, alignItems: 'center', marginHorizontal:15 }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>40</Text>
                
                <Text style={{ color: '#aaa', fontSize: 14 }}>Sec</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ExpiringSoon;
