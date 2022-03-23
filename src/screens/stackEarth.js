import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import Hemisphere from "./earthInfo/hemisphere";
import EarthScreen from "./earth";
import AllSeasons from "./earthInfo/allSeasons";
import AgeEarth from "./earthInfo/ageEarth";

const Stack = createStackNavigator();

export default function StackEarth() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Earth" component={EarthScreen} />
        <Stack.Screen name="allSeasons" component={AllSeasons} />
        <Stack.Screen name="hemisphere" component={Hemisphere} />
        <Stack.Screen name="ageEarth" component={AgeEarth} />
      </Stack.Navigator>
    );
}