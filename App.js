import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import EarthScreen from './src/screens/earth';
import MoonScreen from './src/screens/moon';
import SunScreen from './src/screens/sun';
import ArticlesScreen from './src/screens/articles';

import stackIss from './src/screens/stackIss';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={"ISS"}>
          <Tab.Screen name="ISS" component={stackIss} options={{ tabBarIcon: makeIconRender('cog'), headerShown: false }} />
          <Tab.Screen name="Earth" component={EarthScreen} options={{ tabBarIcon: makeIconRender('earth') }} />
          <Tab.Screen name="Moon" component={MoonScreen} options={{ tabBarIcon: makeIconRender('moon-waning-crescent') }} />
          <Tab.Screen name="Sun" component={SunScreen} options={{ tabBarIcon: makeIconRender('white-balance-sunny') }} />
          <Tab.Screen name="Articles" component={ArticlesScreen} options={{ tabBarIcon: makeIconRender('newspaper-variant-outline') }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
