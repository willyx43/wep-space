import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import SunScreen from "./sun";
import humanLife from "./sunInfo/humanLife";
import spectreSun from "./sunInfo/spectreSun";
import uvTypes from "./sunInfo/uvTypes";

const Stack = createStackNavigator();

export default function stackSun() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Sun" component={SunScreen} />
        <Stack.Screen name="humanLife" component={humanLife} />
        <Stack.Screen name="uvTypes" component={uvTypes} />
        <Stack.Screen name="spectreSun" component={spectreSun} />
      </Stack.Navigator>
    );
}