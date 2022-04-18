import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import SunScreen from "./sun";
import HumanLife from "./sunInfo/humanLife";
import SpectreSun from "./sunInfo/spectreSun";
import UvTypes from "./sunInfo/uvTypes";

const Stack = createStackNavigator();

export default function StackMars() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Mars" component={SaturneMars} />
      {/* <Stack.Screen name="humanLife" component={HumanLife} />
      <Stack.Screen name="uvTypes" component={UvTypes} />
      <Stack.Screen name="spectreSun" component={SpectreSun} /> */}
    </Stack.Navigator>
  );
}