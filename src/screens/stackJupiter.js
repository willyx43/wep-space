import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import JupiterScreen from "./jupiter/jupiter";

const Stack = createStackNavigator();

export default function StackJupiter() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Jupiter" component={JupiterScreen} />
      {/* <Stack.Screen name="humanLife" component={HumanLife} />
      <Stack.Screen name="uvTypes" component={UvTypes} />
      <Stack.Screen name="spectreSun" component={SpectreSun} /> */}
    </Stack.Navigator>
  );
}