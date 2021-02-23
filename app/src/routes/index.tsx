import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Favorites from '../pages/Favorites';

const Auth = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#201736' },
    }}
  >
    <Auth.Screen name="Main" component={Main} />
    <Auth.Screen name="Favorites" component={Favorites} />
  </Auth.Navigator>
);

export default AppRoutes;
