import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BookNowButton = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>Book now</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'goldenrod',
    borderRadius: 9999,
    paddingHorizontal: 16,
    height: 56,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 5,
    backgroundColor: 'goldenrod',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
  },
});

export default BookNowButton;
