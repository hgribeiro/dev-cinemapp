import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

import AppContext from './context';

import Image from './assets/imdblogo.png';
import { Logo } from './styles';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#201736" />
    <View style={{ flex: 1, backgroundColor: '#201736' }}>
      <Logo resizeMode='contain' source={Image} />

      <AppContext>
        <Routes />
      </AppContext>
    </View>
  </NavigationContainer>
);

export default App;
