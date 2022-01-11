import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import MapScreen from "./map";
import IssIno from "./iss";

const Stack = createStackNavigator();

export default function stackIss() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="IssInfo" component={IssIno} />
      </Stack.Navigator>
    );
}