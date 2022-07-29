import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import tw from 'tailwind-react-native-classnames';
import Icon1 from 'react-native-vector-icons/FontAwesome';

const Index = () => {
  return (
    <View style={tw`w-full mt-4`}>
      <View style={tw`w-full flex-row justify-between items-start`}>
        <Image
          source={require('../../assets/rbg.jpg')}
          style={[tw`w-9 h-9`, styles.pImg]}
        />
        <View style={tw`flex-1 px-3`}>
          <Text style={tw`text-white font-bold`}>Daniel Emerald</Text>
          <Text style={[tw`mt-2 text-xs`, {color: 'white'}]}>
            Upgrading this package often requires the font files linked to your
            projects to be updated as well. If the automatic linking works for
            you, running this again should update the fonts.
          </Text>
        </View>

        <Icon1 name="heart-o" size={16} color="white" />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  pImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
