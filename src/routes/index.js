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
import EditProfileScreen from '../views/main/profile/editProfile/index';
import SettingsScreen from '../views/main/profile/settings/index';
import WalletScreen from '../views/main/profile/wallet/index';
import DepositScreen from '../views/main/profile/deposit/index';
import WithdrawScreen from '../views/main/profile/withdraw/index';
import IncomeScreen from "../views/main/profile/income/index"
import VideoPlayer from "../components/videoPlayer/index"
import CommentScreen from "../views/main/publicLife/comments/index"
import PrivateVideoCall from "../views/main/profile/privateVideoCall/index"
import AnswerCallScreen from "../views/main/callScreens/answerScreen"
import CallingScreen from '../views/main/callScreens/callingScreen';

import DashboardScreen from '../views/main';

const Index = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="intro"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="dashboard" component={DashboardScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="clipboard" component={ClipboardScreen} />
        <Stack.Screen name="intro" component={IntroScreen} />
        <Stack.Screen name="onboard" component={OnboardScreen} />
        <Stack.Screen name="otp" component={OTPScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="redeem" component={RedeemScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Deposit" component={DepositScreen} />
        <Stack.Screen name="Income" component={IncomeScreen} />
        <Stack.Screen name="Withdrawal" component={WithdrawScreen} />
        <Stack.Screen name='Player' component={VideoPlayer} />
        <Stack.Screen name='Comments' component={CommentScreen} />
        <Stack.Screen name='privateCall' component={PrivateVideoCall} />
        <Stack.Screen name='answerCall' component={AnswerCallScreen} />
        <Stack.Screen name='calling' component={CallingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
