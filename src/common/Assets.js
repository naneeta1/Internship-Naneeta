import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Card = () => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              'https://example.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.89e0c65d.jpg&w=3840&q=100',
          }}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Dubai</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Redison hotel</Text>
            <Text style={styles.contentSubtitle}>
              Purchase Amount: $ 10,00,100
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    transform: [{ translateY: 0 }],
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
    aspectRatio: 11 / 11,
    width: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 12,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentTitle: {
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  contentSubtitle: {
    fontSize: 14,
    fontFamily: 'Arial',
    color: '#B6AAA2',
  },
});

export default Card;
