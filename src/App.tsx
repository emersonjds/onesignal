import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            color: '#000',
          }}>
          One Signal
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
