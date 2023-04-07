import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Card = ({ imageSource, price, title, type }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.type}>{type}</Text>
      <View style={styles.bottomContainer}>
      <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Claim</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'goldenrod',
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 15,
    
   
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  type: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Card;
