import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

import Home from "./home/index"
import VideoPlayer from "../../../components/videoPlayer/index"
import Comments from "./comments/index"
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Index = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <Text>jhefek</Text>
    </View>
    // <Stack.Navigator initialRouteName='Public Home' screenOptions={{headerShown: false}}>
    //   <Stack.Screen name="Public-Home" component={Home} />
    //   <Stack.Screen name='Player' component={VideoPlayer} />
    //   <Stack.Screen name='Comments' component={Comments} />
    // </Stack.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});
