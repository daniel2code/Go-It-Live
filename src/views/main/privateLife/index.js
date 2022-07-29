import {StyleSheet} from 'react-native';
import React from 'react';

import Home from './Home/index';
import PostComment from './PostComment/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Index = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="PrivateHome"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: "Private Life"
        }}
      />
      <Stack.Screen
        name="PostComment"
        component={PostComment}
        options={{
          headerShown: true,
          headerTitle: 'Comments',
        }}
      />
    </Stack.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});
