import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryCard = ({ redeemed, date, price }) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <Text style={styles.text}>{redeemed}</Text>
        <Text style={styles.dateText}> {date}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.priceText}>{price}USDT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 10,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HistoryCard;
