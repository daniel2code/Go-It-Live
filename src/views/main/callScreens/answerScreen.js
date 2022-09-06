import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/Ionicons';
import {primaryColor} from '../../../helper/theme';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const AnswerScreen = () => {
  return (
    <View style={[tw`flex-1`]}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1583994009785-37ec30bf9342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}
        style={{height: height, width: width, position: 'relative'}}
      />

      <View style={[tw`py-6`, styles.bg]}>
        <View style={[tw`flex-row justify-between px-4`]}>
          <Icon name="camera-outline" color="#fff" size={25} />

          <View style={[tw`justify-center items-center`]}>
            <Text style={[tw`text-white text-2xl font-semibold`]}>
              Pfeelings
            </Text>

            <View style={[tw`flex-row items-center mt-2`]}>
              <Text style={[tw`text-white`]}>8:27</Text>
              <View
                style={[
                  tw`px-4 py-1 flex-row rounded-full justify-center ml-2`,
                  {backgroundColor: primaryColor},
                ]}>
                <Icon name="videocam" size={20} color="#fff" />
                <Text style={[tw`text-white ml-2`]}>Live</Text>
              </View>
            </View>
          </View>

          <Icon name="chatbubble-ellipses-outline" color="#fff" size={25} />
        </View>

        <View style={[tw`flex-row justify-around items-center px-4`]}>
          <View
            style={[
              tw`justify-center items-center rounded-full `,
              styles.iconBox,
            ]}>
            <Icon name="ios-mic" size={27} color="#000" />
          </View>

          <View>
            <View
              style={[
                tw`px-8 py-1 flex-row rounded-full items-center justify-center ml-2`,
                {backgroundColor: primaryColor, height: 50,},
              ]}>
              <Icon name="ios-call" size={27} color="#fff" />
              <Text style={[tw`text-white ml-4`]}>End Call</Text>
            </View>
          </View>

          <View
            style={[
              tw`justify-center items-center rounded-full `,
              styles.iconBox,
            ]}>
            <Icon name="videocam" size={27} color="#000" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AnswerScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    height: height,
    width: width,
    position: 'absolute',
    justifyContent: 'space-between',
  },

  iconBox: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
  },
});
