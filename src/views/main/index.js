import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GetColor} from '../../store/slices/colorSlice';

import Profile from './profile/profile/index';
import Notifications from './notifications';
import PublicLive from './publicLife/home/index';
import PrivateLife from './privateLife/Home/index';
import GoLive from './goLive';
// import VideoPlayer from '../../components/videoPlayer/index';
import {useQuery} from 'react-query';
import {fetchUser} from '../../api/services/userServices';
import * as Keychain from 'react-native-keychain';

import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const Index = () => {
  const {primaryColor, textColor} = GetColor();
  const {data, isLoading, isError, error} = useQuery('userData', fetchUser);

  console.log(data);
  console.log(isLoading);
  console.log(error);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 58,
          //   backgroundColor: primaryColor,
          position: 'absolute',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={PublicLive}
        options={{
          tabBarIcon: () => <Icon name="home" color={textColor} size={25} />,
          tabBarLabelStyle: {
            color: textColor,
            fontWeight: '700',
            marginBottom: 2,
          },
        }}
      />
      <Tab.Screen
        name="Private"
        component={PrivateLife}
        options={{
          headerShown: false,
          headerTitle: 'Private Live',
          tabBarIcon: () => (
            <Icon1 name="shield-lock" color={textColor} size={25} />
          ),
          tabBarLabelStyle: {
            color: textColor,
            fontWeight: '700',
            marginBottom: 2,
          },
        }}
      />

      <Tab.Screen
        name="Go It Live"
        component={GoLive}
        options={{
          tabBarIcon: () => (
            <Icon1 name="plus-circle" color={textColor} size={35} />
          ),
          tabBarLabelStyle: {
            color: textColor,
            fontWeight: '700',
            marginBottom: 2,
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon2 name="user" color={textColor} size={25} />,
          tabBarLabelStyle: {
            color: textColor,
            fontWeight: '700',
            marginBottom: 2,
          },
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: true,
          headerTitle: 'Notifications',
          tabBarIcon: () => <Icon1 name="bell" color={textColor} size={25} />,
          tabBarLabelStyle: {
            color: textColor,
            fontWeight: '700',
            marginBottom: 2,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});
