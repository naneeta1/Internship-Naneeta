import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const DashboardProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../images/nft1.png')} style={styles.image} />
        <Text style={styles.title}>Total Collection</Text>
        <Text style={styles.number}>10,000</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View on OpenSea</Text>
          <Image source={require('../images/nft1.png')} style={styles.buttonIcon} resizeMode='contain' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardProfile;

const styles = StyleSheet.create({
  container: {
    width: 700,
    maxWidth: '50%',
    paddingHorizontal: 5,
    marginTop:15,
    alignSelf:'center',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#888'
  },
  number: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  button: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#888',
    backgroundColor: '#eee'
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#333'
  },
  buttonIcon: {
    width: 6,
    height: 10,
    marginLeft: 5
  }
});
