import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
        }}>
            <Text style={{
                color: '#000'
            }}>
                Started
            </Text>
        </View>
    );
}

export default App;