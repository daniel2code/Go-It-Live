import {StyleSheet} from 'react-native';
import React from 'react';

import Home from './home';
import EditProfile from './editProfile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Index = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ProfileHome"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: "@Pfeelings",
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
          headerTitle: 'Comments',
        }}
      />
    </Stack.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});
