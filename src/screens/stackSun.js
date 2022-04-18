import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import SunScreen from "./sun";
import HumanLife from "./sunInfo/humanLife";
import SpectreSun from "./sunInfo/spectreSun";
import UvTypes from "./sunInfo/uvTypes";

const Stack = createStackNavigator();

export default function StackSun() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Sun" component={SunScreen} />
      <Stack.Screen name="humanLife" component={HumanLife} />
      <Stack.Screen name="uvTypes" component={UvTypes} />
      <Stack.Screen name="spectreSun" component={SpectreSun} />
    </Stack.Navigator>
  );
}