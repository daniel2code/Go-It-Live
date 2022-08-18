import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Feather';

const Index = ({navigation}) => {
  return (
    <>
      <TouchableOpacity
        style={[tw`w-full flex-row items-center mt-5 px-4`]}
        onPress={() => navigation.navigate('VideoCall')}>
        <Icon1 name="phone-call" size={22} color="#000" />

        <Text style={[tw` ml-4`, {color: '#000', fontSize: 17}]}>Call now</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[tw`w-full flex-row items-center mt-6 px-4`]}>
        <Icon name="hearto" size={25} color="#000" />

        <Text style={[tw` ml-4`, {color: '#000', fontSize: 17}]}>
          Schedule a call later
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
