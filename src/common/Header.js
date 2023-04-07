import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const {height, width} = Dimensions.get('window');

const Header = ({title, leftIcon, rightIcon, onClickLeftIcon , onConnectPress}) => {
  const navigation = useNavigation();
  const handleNotificationPress = () => {
    navigation.navigate('Notification');
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={() => onClickLeftIcon()}>
        <Image source={leftIcon}  style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title} >{title}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity style={styles.rightbtn} onPress={() => handleNotificationPress()}>
          <Image source={rightIcon}  style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.connectBtn} >
          <Text style={styles.connectButtonText}>Connect</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        width:width,
        height:65,
        position:'absolute',
        top:0,
        backgroundColor:'black',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15,
    },
    btn:{
      width:30,
      height:30,
      justifyContent:'center',
      alignItems:'center'
    },
    rightbtn:{
      width:30,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      marginEnd:10,
    },
    connectBtn:{
        backgroundColor: '#daa520',
        borderRadius: 25,
        padding:5,
        marginRight: 0,
    },
    icon:{
        width:40,
        height:40,
    },
    connectButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor:'#daa520',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    title:{
        color:'#daa520',
        fontSize:20,
        fontWeight:'bold',
    }
});

export default Header;
