import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import MapScreen from "./map";
import IssInfo from "./iss";
import InfoProfil from "./infoProfil";
import EditProfil from "./editProfil";
import FourPlanets from "./fourPlanets";
import JupiterScreen from "./jupiter/jupiter";
import SaturneScreen from "./saturne/saturne";
import VenusScreen from "./venus/venus";
import MarsScreen from "./mars/mars";

const Stack = createStackNavigator();

export default function StackIss() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="FourPlanets" component={FourPlanets} />
        <Stack.Screen name="JupiterScreen" component={JupiterScreen} />
        <Stack.Screen name="SaturneScreen" component={SaturneScreen} />
        <Stack.Screen name="VenusScreen" component={VenusScreen} />
        <Stack.Screen name="MarsScreen" component={MarsScreen} />
        <Stack.Screen name="IssInfo" component={IssInfo} />
        <Stack.Screen name="InfoProfil" component={InfoProfil} />
        <Stack.Screen name="EditProfil" component={EditProfil} />
      </Stack.Navigator>
    );
}