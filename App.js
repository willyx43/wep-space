import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import stackSun from './src/screens/stackSun';
import stackMoon from './src/screens/stackMoon';
import stackEarth from './src/screens/stackEarth';
import ArticlesScreen from './src/screens/articles';

import stackIss from './src/screens/stackIss';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={"ISS"}>
          <Tab.Screen name="ISS" component={stackIss} options={{ tabBarIcon: makeIconRender('cog'), headerShown: false }} />
          <Tab.Screen name="Earth" component={stackEarth} options={{ tabBarIcon: makeIconRender('earth') }} />
          <Tab.Screen name="Moon" component={stackMoon} options={{ tabBarIcon: makeIconRender('moon-waning-crescent') }} />
          <Tab.Screen name="Sun" component={stackSun} options={{ tabBarIcon: makeIconRender('white-balance-sunny') }} />
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
