import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardScreen from '../views/auth/onboarding/index';
import OTPScreen from '../views/auth/otp/index';
import LoginScreen from '../views/auth/signin/index';
import SignUpScreen from '../views/auth/signup/index';
import RedeemScreen from '../views/auth/redeem/index';
import IntroScreen from '../views/intro/index';
import ClipboardScreen from '../views/auth/clipboard/index';

import DashboardScreen from '../views/main';

const Index = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="intro" component={IntroScreen} />
        <Stack.Screen name="clipboard" component={ClipboardScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="onboard" component={OnboardScreen} />
        <Stack.Screen name="otp" component={OTPScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="redeem" component={RedeemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
