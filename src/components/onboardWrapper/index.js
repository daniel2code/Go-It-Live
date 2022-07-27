import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/EvilIcons';

import Video from 'react-native-video';

const Index = ({children, navigation}) => {
  return (
    <>
      <Video
        source={require('../../assets/bg.mp4')}
        resizeMode="cover"
        repeat={true}
        style={styles.bgImg}
      />
      <View
        style={[
          tw`p-4 flex-1 absolute w-full h-full justify-between`,
          styles.bg,
        ]}>
        <View style={tw`w-full`}>
          <View style={tw`justify-between flex-row`}>
            <Icon
              name="arrow-back"
              color="#fff"
              size={25}
              onPress={() => navigation && navigation.goBack()}
            />
            <Icon1 name="question" color="#fff" size={27}></Icon1>
          </View>
          <View style={{height: '97%'}}>{children}</View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  bgImg: {
    width: '100%',
    height: '100%',
  },
});

export default Index;
