import React, {useContext, useState, useEffect} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StackSun from './src/screens/stackSun';
import StackMoon from './src/screens/stackMoon';
import StackEarth from './src/screens/stackEarth';
import ArticlesScreen from './src/screens/articles';
import StackIss from './src/screens/stackIss';

import Signin from './src/screens/signin';
import Signup from './src/screens/signup';

import auth from '@react-native-firebase/auth';
import {AuthContext} from './src/AuthProvider';
import { AuthProvider } from './src/AuthProvider';

const Tab = createBottomTabNavigator();

const AuthStack = createStackNavigator();
function AuthFlow() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Signin"
        component={Signin}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Signup"
        component={Signup}
      />
    </AuthStack.Navigator>
  );
}

const Stack = createStackNavigator();
function App() {

  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer>
      {user ? (
          <>
          <Tab.Navigator initialRouteName={"ISS"}>
            <Tab.Screen name="ISS" component={StackIss} options={{ tabBarIcon: makeIconRender('cog'), headerShown: false }} />
            <Tab.Screen name="Earth" component={StackEarth} options={{ tabBarIcon: makeIconRender('earth') }} />
            <Tab.Screen name="Moon" component={StackMoon} options={{ tabBarIcon: makeIconRender('moon-waning-crescent') }} />
            <Tab.Screen name="Sun" component={StackSun} options={{ tabBarIcon: makeIconRender('white-balance-sunny') }} />
            <Tab.Screen name="Articles" component={ArticlesScreen} options={{ tabBarIcon: makeIconRender('newspaper-variant-outline') }} />
          </Tab.Navigator>
          </>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="Auth"
              component={AuthFlow}
            />
          </Stack.Navigator>
        )}
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}


export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};