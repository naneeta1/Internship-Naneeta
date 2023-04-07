import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts';

const data = [0, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

const Chart = ({ price, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>{price} ETH</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.chartContainer}>
        <LineChart
          style={{ flex: 1 }}
          data={data}
          svg={{ stroke: 'green', strokeWidth: 3 }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    color: '#999999',
    marginBottom: 12,
  },
  chartContainer: {
    height: 200,
    flexDirection: 'row',
  },
});

export default Chart;
