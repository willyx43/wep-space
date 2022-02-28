import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import hemisphere from "./earthInfo/hemisphere";
import EarthScreen from "./earth";
import allSeasons from "./earthInfo/allSeasons";
import ageEarth from "./earthInfo/ageEarth";

const Stack = createStackNavigator();

export default function stackEarth() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Earth" component={EarthScreen} />
        <Stack.Screen name="allSeasons" component={allSeasons} />
        <Stack.Screen name="hemisphere" component={hemisphere} />
        <Stack.Screen name="ageEarth" component={ageEarth} />
      </Stack.Navigator>
    );
}