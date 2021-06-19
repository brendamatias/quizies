import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    />
    <View style={{ flex: 1, backgroundColor: '#F4F4F4' }} />
  </>
);

export default App;
