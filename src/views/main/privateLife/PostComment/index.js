import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import tw from 'tailwind-react-native-classnames';
import Comments from '../../../../components/comments/index';
import Button from '../../../../components/button/index';

const Index = () => {
  return (
    <View style={[tw``, {flex: 1, backgroundColor: 'white'}]}>
      <View style={[tw`flex-1 px-3`]}>
        <Comments />
        <Comments />
      </View>

      <View
        style={[
          tw`mb-14 flex-row justify-between items-center px-3`,
          {height: 60, borderColor: 'gray', borderWidth: 1},
        ]}>
        <View style={tw`w-full flex-row justify-between items-center`}>
          <Image
            source={require('../../../../assets/rbg.jpg')}
            style={[tw`w-9 h-9`, styles.pImg]}
          />
          <View style={tw`flex-1 px-3`}>
            <TextInput
              placeholder="Add a comment"
              placeholderTextColor="gray"
            />
          </View>

          <TouchableOpacity style={[tw`items-center justify-center `, styles.btn]}>
            <Text style={[tw`text-xs font-semibold`, {color: "black"}]}>Post</Text>
          </TouchableOpacity>
        </View>
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

  btn: {
    width: 60,

    height: 35,
  },
});
