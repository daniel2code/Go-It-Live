import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import React from 'react';

import tw from 'tailwind-react-native-classnames';

const reportModal = ({action}) => {
  return (
    <>
      <View style={[tw`w-full mt-5 px-4`]}>
        <Text style={[tw`font-bold`, {color: '#000', fontSize: 17}]}>
          Why are you reporting this post?
        </Text>

        <Text style={[tw`mt-5`, {color: 'gray', fontSize: 15}]}>
          Your report is annonymous, except if you are reporting an intellectual
          property infringement. If someone is in immediate danger, call the
          local emergency services.
        </Text>
      </View>

      <TouchableOpacity
        style={[tw`w-full flex-row items-center mt-6 px-4`]}
        onPress={action}>
        <Text style={[tw``, {color: '#000', fontSize: 17}]}>It's spam</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[tw`w-full flex-row items-center mt-6 px-4`]}
        onPress={action}>
        <Text style={[tw``, {color: '#000', fontSize: 17}]}>
          Hate speech or symbols
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[tw`w-full flex-row items-center mt-6 px-4`]}
        onPress={action}>
        <Text style={[tw``, {color: '#000', fontSize: 17}]}>
          Nude or sexual content
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[tw`w-full flex-row items-center mt-6 px-4`]}
        onPress={action}>
        <Text style={[tw``, {color: '#000', fontSize: 17}]}>
          Bullying or harassement
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[tw`w-full flex-row items-center mt-6 px-4`]}
        onPress={action}>
        <Text style={[tw``, {color: '#000', fontSize: 17}]}>
          False information
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[tw`w-full flex-row items-center mt-6 px-4`]}
        onPress={action}>
        <Text style={[tw``, {color: '#000', fontSize: 17}]}>Scam or fraud</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[tw`w-full flex-row items-center mt-6 px-4`]}
        onPress={action}>
        <Text style={[tw``, {color: '#000', fontSize: 17}]}>
          Violent content
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default reportModal;
