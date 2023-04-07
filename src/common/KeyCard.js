import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';


const {width, height} = Dimensions.get('window');

const KeyCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>#157896</Text>
        </View>
        <Text numberOfLines={1} style={styles.addressText}>
          0x9Af568442868356c7aE834A47614600002545476555555555772d9F5B87e9b
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.copyButton}>
          <Text style={styles.copyButtonText}>Copy Address</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   height:60,
   width:width,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 6,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 8,
    
  },
  tag: {
    height: '100%',
    width:80,
    borderRadius: 25,
    backgroundColor: 'black',
    padding:10,
  },
  tagText: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  addressText: {
    flex: 1,
    fontSize: 13,
    color: '#616E7C',
    paddingLeft: 8,
  },
  rightContainer: {
    paddingRight: 12,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  copyButtonText: {
    fontSize: 13,
    color: '#616E7C',
  },
});

export default KeyCard;