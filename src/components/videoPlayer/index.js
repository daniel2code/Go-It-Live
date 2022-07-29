import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/Feather';

import {GetColor} from '../../store/slices/colorSlice';

const Index = ({route, navigation}) => {
  const {primaryColor, textColor} = GetColor();

  const {
    item: {url},
  } = route.params;

  return (
    <>
      <Video
        source={{uri: url}}
        resizeMode="cover"
        // repeat={true}
        style={styles.bgImg}
      />

      <View
        style={[
          tw`p-4 absolute w-full h-full flex-col justify-between pb-14`,
          styles.bg,
        ]}>
        <View style={tw`w-full`}>
          <View style={tw` flex-row`}>
            <Icon
              name="arrow-back"
              color="#fff"
              size={25}
              onPress={() => navigation && navigation.goBack()}
            />
            <Text style={tw`text-base ml-3 font-bold text-white`}>Live</Text>
          </View>
        </View>

        <View style={[tw`w-full h-60 flex-row justify-between items-end pb-4`]}>
          <View style={tw`flex-row items-center`}>
            <Image
              source={require('../../assets/rbg.jpg')}
              style={[tw`w-9 h-9`, styles.pImg]}
            />
            <Text style={tw`text-white font-bold ml-4`}>Daniel Emerald</Text>
            <TouchableOpacity style={[tw`py-2 px-4 ml-4`, styles.careBtn]}>
              <Text style={tw`text-white font-bold`}>Care Me</Text>
            </TouchableOpacity>
          </View>

          <View>
            <View style={tw`items-center`}>
              <Icon1 name="heart-o" size={23} color="white" />
              <Text style={tw`text-white font-bold mt-2`}>3k</Text>
            </View>

            <TouchableOpacity
              style={tw`items-center mt-4`}
              onPress={() => navigation.navigate('Comments', { url: url })}
              >
              <Icon2 name="comment" size={25} color="white" />
              <Text style={tw`text-white font-bold mt-2`}>500</Text>
            </TouchableOpacity>

            <View style={tw`items-center mt-4`}>
              <Icon3 size={23} name="more-vertical" color="white" />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },

  bg: {
    // backgroundColor: 'green',
  },

  careBtn: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },

  pImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
