import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Octicons';

const Index = ({handleAction, reportModal, callModal}) => {
  return (
    <>
      <TouchableOpacity style={[tw`w-full flex-row items-center mt-5 px-4`]}>
        <Icon1 name="phone-call" size={22} color="#000" />

        <Text style={[tw` ml-4`, {color: '#000', fontSize: 17}]} onPress={callModal}>
          Schedule call
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={[tw`w-full flex-row items-center mt-6 px-4`]}>
        <Icon name="hearto" size={25} color="#000" />

        <Text style={[tw` ml-4`, {color: '#000', fontSize: 17}]}>Care</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[tw`w-full flex-row items-center mt-6 px-4`]}>
        <Icon name="sharealt" size={25} color="#000" />

        <Text style={[tw` ml-4`, {color: '#000', fontSize: 17}]}>Share</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[tw`w-full flex-row items-center mt-6 px-4`]}
        onPress={handleAction}>
        <Icon2 name="block" size={22} color="#000" />

        <Text
          style={[tw` ml-4`, {color: '#000', fontSize: 17}]}
          onPress={handleAction}>
          Block
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[tw`w-full flex-row items-center mt-6 px-4`]}
        onPress={reportModal}>
        <Icon3 name="report" size={22} color="#000" />

        <Text style={[tw` ml-4`, {color: '#000', fontSize: 17}]}>Report</Text>
      </TouchableOpacity>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
