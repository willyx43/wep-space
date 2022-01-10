import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './src/screens/map';
import EarthScreen from './src/screens/earth';
import MoonScreen from './src/screens/moon';
import SunScreen from './src/screens/sun';
import ArticlesScreen from './src/screens/articles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ISS" component={MapScreen} options={{ tabBarIcon: makeIconRender('cog'), headerShown: false }} />
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
