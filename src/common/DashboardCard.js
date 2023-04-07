import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const DashboardCard = ({title,imageSource, eths, price, percent,iconSource}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.imageContainer}>
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.amount}>{eths}</Text>
      <View style={styles.info}>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.changeContainer}>
          <View style={styles.icon}>
            <Image
              source={iconSource}
              style={styles.arrow}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.change}>{percent}</Text>
        </View>
      </View>
    </View>
  );
};

export default DashboardCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 2,
    marginTop:20,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: '#374151',
    marginBottom: 12,
    textTransform: 'uppercase',
    alignSelf:'center',
  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    height: 60,
    width: 60,
  },
  amount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 8,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#D1FAE5',
    borderRadius: 20,
    padding: 6,
    marginRight: 4,
  },
  arrow: {
    height: 10,
    width: 8,
  },
  change: {
    fontSize: 12,
    fontWeight: '600',
    color: '#10B981',
  },
});
