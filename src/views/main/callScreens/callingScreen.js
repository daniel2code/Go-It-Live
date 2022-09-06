import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {primaryColor} from '../../../helper/theme';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const CallingScreen = () => {
  return (
    <View style={[tw`flex-1`]}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1583994009785-37ec30bf9342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}
        style={{height: height, width: width, position: 'relative'}}
      />

      <View style={[tw`pb-6`, styles.bg]}>
        <View style={[tw`justify-center items-center`, styles.topbar]}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1583994009785-37ec30bf9342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }}
            style={{height: 120, width: 120, borderRadius: 100}}
          />
          <Text style={[tw`text-white text-2xl pt-2 pb-1 font-semibold`]}>
            Pfeelings
          </Text>

          <Text style={[tw`text-white py-3`]}>INCOMING</Text>
        </View>

        <View style={[tw`flex-row justify-between px-8 items-center`]}>
          <View
            style={[
              tw`justify-center items-center rounded-full `,
              styles.iconBox,
              {backgroundColor: 'red'},
            ]}>
            <Icon name="phone-disabled" size={27} color="#fff" />
          </View>

          <View
            style={[
              tw`justify-center items-center rounded-full `,
              styles.iconBox,
              {backgroundColor: 'green'},
            ]}>
            <Icon name="phone" size={27} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CallingScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    height: height,
    width: width,
    position: 'absolute',
    justifyContent: 'space-between',
  },

  topbar: {
    backgroundColor: primaryColor,
    padding: '5%',
  },

  iconBox: {
    width: 65,
    height: 65,
  },
});
