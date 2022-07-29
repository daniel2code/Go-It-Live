import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GetColor} from '../../store/slices/colorSlice';

import Profile from './profile';
import Notifications from './notifications';
import PublicLive from './publicLife';
import PrivateLife from './privateLife';
import GoLive from './goLive';
import VideoPlayer from '../../components/videoPlayer/index';

import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const Index = () => {
  const {primaryColor, textColor} = GetColor();

  return (
    <Tab.Navigator
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
        name="GoLive"
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
