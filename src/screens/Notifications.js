import { View, Text } from 'react-native'
import React from 'react';
import NotificationCard from '../common/NotificationCard';

const Notifications = () => {
  return (
    <View>
      <NotificationCard imageUri={require('../images/nft1.png') } name={'@dolcemariposa followed you'} time={'Just Now'} />
      <NotificationCard imageUri={require('../images/nft1.png') } name={'pimptronot@pimptronotliked Cryppo #1491'} time={'10 minutes ago'} />
      <NotificationCard imageUri={require('../images/nft1.png') } name={'centralgold@centralgold purchased Pepe mfer #16241'} time={'20 minutes ago'} />
      <NotificationCard imageUri={require('../images/nft1.png') } name={'theline@theline followed you'} time={'30 minutes ago'} />
    </View>
  )
}

export default Notifications