import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {shadowProp} from '../../../../helper/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'tailwind-react-native-classnames';

const Index = ({navigation}) => {
  return (
    <View style={[tw`flex-1`]}>
      <View
        style={[
          tw`h-14 w-full flex-row  items-center px-4`,
          styles.topbar,
          shadowProp,
        ]}>
        <Icon
          name="keyboard-backspace"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={[tw`text-black font-semibold ml-3`, {fontSize: 20}]}>
          Deposit
        </Text>
      </View>

      <View style={tw`p-5`}>
        <View style={[tw`my-5`]}>
          <Text style={[tw`text-black text-xs font-semibold mb-2`]}>
            Enter Amount
          </Text>
          <TextInput
            style={[styles.input]}
            placeholder="eg 20,000"
            placeholderTextColor="#c1c1c1"
            keyboardType="numeric"
          />
        </View>

        <View style={[tw`my-5`]}>
          <Text style={[tw`text-black text-xs font-semibold mb-2`]}>
            Enter Account Number
          </Text>
          <TextInput
            style={[styles.input]}
            placeholder="eg 2109867843"
            placeholderTextColor="#c1c1c1"
            keyboardType="numeric"
          />
        </View>

        <View style={[tw`my-5`]}>
          <Text style={[tw`text-black text-xs font-semibold mb-2`]}>
            Enter Secret Pin
          </Text>
          <TextInput
            style={[styles.input]}
            placeholder="eg 1234"
            placeholderTextColor="#c1c1c1"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          style={[tw`py-3 w-full mt-10 items-center`, styles.saveBtn]}>
          <Text style={tw`text-white font-bold text-sm`}>Deposit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#fff',
  },

  input: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    color: '#000',
    height: 40,
    paddingLeft: 0,
  },

  saveBtn: {
    backgroundColor: 'pink',
    borderRadius: 20,
  },
});
