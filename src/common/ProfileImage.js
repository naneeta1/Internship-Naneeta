import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 100,
    width: 100,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: 'white',
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: -40,
    zIndex: 10,
    backgroundColor: 'white', // Set background color for iOS
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});

const ProfileImage = () => (
  <View style={styles.container}>
    <Image
      source={require('../images/nft1.png')}
      style={styles.image}
    />
  </View>
);

export default ProfileImage;
