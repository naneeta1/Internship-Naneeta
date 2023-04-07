import React from 'react';
import { View, Text, StyleSheet, Image , Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const DealCard = ({imageSource,title,hotel,artworks }) => {
  return (
    <View style={styles.card}>
      <View style={imageSource}>
        <Image
          source={require('../images/nft1.png')}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{title}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{hotel}</Text>
            <Text style={styles.subtitle}>{artworks}</Text>
            <View style={styles.timerContainer}>
              <View style={styles.timerBox}>
                <Text style={styles.timerLabel}>01</Text>
                <Text style={styles.timerText}>Days</Text>
              </View>
              <View style={styles.timerBox}>
                <Text style={styles.timerLabel}>23</Text>
                <Text style={styles.timerText}>Hours</Text>
              </View>
              <View style={styles.timerBox}>
                <Text style={styles.timerLabel}>58</Text>
                <Text style={styles.timerText}>Min</Text>
              </View>
              <View style={styles.timerBox}>
                <Text style={styles.timerLabel}>54</Text>
                <Text style={styles.timerText}>Sec</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    marginVertical: 10,
    height: height * 0.5,
    width: width - 20,
    backgroundColor: '#FFF',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    height: '60%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  labelContainer: {
    alignSelf: 'flex-start',
  },
  label: {
    padding: 4,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'goldenrod',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  detailsContainer: {
    flexDirection: 'column',
  },
  title: {
    color: 'goldenrod',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 3,
  },
  subtitle: {
    color: 'goldenrod',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 10,
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timerBox: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  timerLabel: {
    color: 'goldenrod',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1, 
  },
  timerValue:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#4b5563',
    borderRadius: 5,
    padding:15,
    margin: 0,
  },

});
export default DealCard;
