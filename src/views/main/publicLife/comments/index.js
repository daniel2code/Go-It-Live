import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'tailwind-react-native-classnames';

import Comments from '../../../../components/comments/index';

const Index = ({navigation, route}) => {
  const { url } = route.params;

  return (
    <View style={tw`flex-1 `}>
      <View style={[tw``, {backgroundColor: 'black', height: '36%'}]}>
        <View style={[tw``, {height: '90%'}]}>
          <Video
            source={{uri: url && url}}
            resizeMode="cover"
            // repeat={true}
            style={styles.bgImg}
          />
        </View>

        <View style={tw`pl-3 flex-row items-center`}>
          <Icon
            name="arrow-back"
            color="#fff"
            size={25}
            onPress={() => navigation && navigation.goBack()}
          />

          <Text style={tw`text-white font-bold text-base pl-5`}>Comments</Text>
        </View>
      </View>

      <View style={[tw`flex-1 p-3`, {backgroundColor: 'white'}]}>
        <View style={tw`w-full`}>
          <Comments />
          <Comments />
          <Comments />
          <Comments /> 
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
});
