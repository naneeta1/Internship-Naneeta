import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListItem = ({imageSource, title, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nftContainer}>
        <View style={styles.nftIcon}>
          <Image 
            source={imageSource}
            style={styles.nftImage}
          />
        </View>
        <Text style={styles.nftTitle}>
          {title}
        </Text>
      </View>
      <Text style={styles.nftCount}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 3, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
    backgroundColor: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
    height:70,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop:10,
  },
  nftContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nftIcon: {
    width: 40,
    height: 40,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nftImage: { 
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  nftTitle: { 
    marginLeft: 5,
    marginRight: 5,
  },
  nftCount: { 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginLeft: 2,
    marginRight: 2,
    letterSpacing: 1,
  },
});

export default ListItem;
