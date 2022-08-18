import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const Index = () => {
  return (
    <View style={[tw`flex-1 justify-between`, {backgroundColor: 'black'}]}>
      <View style={tw`w-full items-center`}>
        <Image source={require('../../assets/rbg.jpg')} style={[tw`rounded`]} />
        <Text style={[tw`mt-4`]}>Pfeelings</Text>
        <Text style={[tw`mt-4`]}>Calling</Text>
      </View>

      <View style={[tw`px-5 flex-row justify-between`, styles.bottomBox]}>
        <Icon name="volume-medium" size={25} />
        <Icon1 name="video-off" size={25} />
        <Icon name="mic-off-sharp" size={25} />

        <TouchableOpacity
          style={[
            tw`rounded justify-center itens-center`,
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
    position: 'absolute',
    bottom: 58,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
