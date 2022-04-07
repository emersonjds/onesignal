import React, { useEffect } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import OneSignal from 'react-native-onesignal';

const App = () => {
  useEffect(() => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('08130f0a-e915-4595-8b13-6c3f4935f59d');
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
  }, []);

  return (
    <View>
      <Text>One Signal</Text>
    </View>
  );
};

export default App;
