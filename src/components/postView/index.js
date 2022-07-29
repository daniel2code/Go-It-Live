import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import Video from 'react-native-video';
import tw from 'tailwind-react-native-classnames';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/Feather';

const Index = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Video
        source={require('../../assets/bg.mp4')}
        resizeMode="cover"
        repeat={true}
        style={styles.bgImg}
      />
      <View style={[tw`p-3 flex-1 absolute w-full h-full`]}>
        <View style={tw`w-full flex-row justify-between items-start`}>
          <Image
            source={require('../../assets/rbg.jpg')}
            style={[tw`w-9 h-9`, styles.pImg]}
          />
          <View style={tw`flex-1 px-3`}>
            <Text style={tw`text-white font-bold`}>Daniel Emerald</Text>
            <Text
              style={[tw`mt-0 text-xs text-white font-bold`, {color: 'white'}]}>
              daniel_emerald
            </Text>
          </View>

          <Icon3 size={18} name="more-vertical" color="white" />
        </View>
      </View>

      <View
        style={[
          tw`px-3 py-1 flex-row items-center justify-between`,
          {height: '15%'},
        ]}>
        <View>
          <View style={[tw`py-1 flex-row`]}>
            <Icon1 name="heart-o" size={20} color="white" />
            <Icon2 name="comment" size={27} color="white" style={tw`ml-5`} />
          </View>

          <Text style={[tw`font-bold mt-1 text-xs`, {color: 'white'}]}>
            12,000 Likes
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('PostComment')}>
          <Icon3 name="send" size={22} color="white" style={tw`ml-3`} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    height: '60%',
    width: '100%',
    backgroundColor: 'black',
  },

  bgImg: {
    width: '100%',
    height: '85%',
  },

  pImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
