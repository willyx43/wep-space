import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import MapScreen from "./map";
import IssInfo from "./iss";
import InfoProfil from "./infoProfil";

const Stack = createStackNavigator();

export default function StackIss() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="IssInfo" component={IssInfo} />
        <Stack.Screen name="InfoProfil" component={InfoProfil} />
      </Stack.Navigator>
    );
}