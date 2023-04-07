import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Bookings = ({title, count}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.bookingCount}>{count}</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.bookingTitle}>{title}</Text>
        <TouchableOpacity style={styles.bookingButton}>
          <Text style={styles.buttonText}>Claim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1F9F1',
    borderRadius: 10,
    padding: 10,
    height: 100,
    marginVertical:10,
    
  },
  countContainer: {
    position: 'absolute',
    top: 5,
    left: '50%',
    transform: [{translateX: -15}],
    backgroundColor: 'white',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    marginBottom:20,
  },
  bookingCount: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    alignSelf:'center',
    marginBottom:20,
   
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookingTitle: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '500',
    color: '#6B7280',
    
  },
  bookingButton: {
    backgroundColor: 'goldenrod',
    borderRadius: 20,
    padding: 5,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    paddingHorizontal: 10,
  },
});

export default Bookings;
