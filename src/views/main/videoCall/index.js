import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const Index = () => {
  return (
    <View style={[tw`flex-1 justify-between w-full pt-5`, {backgroundColor: 'black'}]}>
      <View style={tw`w-full items-center`}>
        <Image source={require('../../../assets/rbg.jpg')} style={[tw`rounded-full`, {height: 90, width: 90}]} />
        <Text style={[tw`mt-3 text-white`, {fontSize: 25}]}>Pfeelings</Text>
        <Text style={[tw`mt-3 italic text-white`]}>Calling</Text>
      </View>

      <View style={[tw`px-5 flex-row items-center justify-between w-full`, styles.bottomBox]}>
        <Icon name="volume-medium" size={30} />
        <Icon1 name="video-off" size={26} />
        <Icon name="mic-off-sharp" size={30} />

        <TouchableOpacity
          style={[
            tw`rounded-full justify-center items-center`,
            {backgroundColor: 'red', width: 50, height: 50},
          ]}>
          <Icon2 name="call-end" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  bottomBox: {
    backgroundColor: 'pink',
    marginBottom: 58,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
  },
});
