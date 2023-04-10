import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 180,
    width: '100%',
    backgroundColor: 'white', // Set background color for iOS
    marginTop:75,
    borderRadius:40,

  },
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileImage: {
    position: 'absolute',
    bottom: -50,
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'white',
    overflow: 'hidden',
    zIndex: 10,
  },
});

const CoverImage = () => (
  <View style={styles.container}>
    <Image
      source={require('../images/nft1.png')}
      style={styles.coverImage}
    />
    <View style={styles.profileImage}>
      <Image
        source={require('../images/nft1.png')}
        style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
      />
    </View>
  </View>
);

export default CoverImage;
