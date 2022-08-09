import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import tw from 'tailwind-react-native-classnames';

const Index = () => {
  return (
    <View style={tw`w-full`}>
      <View style={tw`w-full flex-row justify-between items-start mt-5`}>
        <Image
          source={require('../../assets/rbg.jpg')}
          style={[tw`w-9 h-9`, styles.pImg]}
        />
        <View style={tw`flex-1 px-3`}>
          <Text style={[tw` text-sm`, {color: '#000'}]}>
            @Bossman_Pfeelings cared your video, check their posts...
          </Text>
        </View>

        <TouchableOpacity style={[tw`py-2 px-3`, styles.careBtn]}>
          <Text style={tw`text-white font-bold text-xs`}>Care Back</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  careBtn: {
backgroundColor: "pink",
    borderRadius: 20,
  },

  pImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
