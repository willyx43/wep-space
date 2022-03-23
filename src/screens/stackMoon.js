import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import MoonScreen from "./moon";
import FirstApollo from "./apollo/apolloFirst";
import SecondApollo from "./apollo/apolloSecond";
import ThirdApollo from "./apollo/apolloThird";
import FourthApollo from "./apollo/apolloFourth";

const Stack = createStackNavigator();

export default function StackMoon() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Moon" component={MoonScreen} />
        <Stack.Screen name="FirstApollo" component={FirstApollo} />
        <Stack.Screen name="SecondApollo" component={SecondApollo} />
        <Stack.Screen name="ThirdApollo" component={ThirdApollo} />
        <Stack.Screen name="FourthApollo" component={FourthApollo} />
      </Stack.Navigator>
    );
}