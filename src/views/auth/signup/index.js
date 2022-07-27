import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

import Wrapper from '../../../components/onboardWrapper/index';
import TextInput from '../../../components/TextInput/authInput';
import Button from '../../../components/button/index';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from "react-native-vector-icons/Entypo"

const Index = ({ navigation }) => {
  return (
    <Wrapper navigation={navigation}>
      <View style={[tw` justify-between h-full`]}>
        <View>
          <Text style={tw`text-3xl pl-1 font-bold mt-14 text-white`}>
            Sign Up
          </Text>
          <View style={tw`mt-5`}>
            <TextInput
              placeholder="Full Name"
              icon1={<Icon2 color="#fff" name="user" size={25} />}
            />
            <TextInput
              placeholder="Email"
              icon1={<Icon color="#fff" name="email" size={25} />}
            />

            <TextInput
              placeholder="User Name"
              icon1={<Icon1 color="#fff" name="user" size={25} />}
            />

            <TextInput
              placeholder="Password"
              icon1={<Icon1 color="#fff" name="lock" size={25} />}
              icon2={<Icon color="#fff" name="remove-red-eye" size={25} />}
            />

            <Button text="Sign Up" btnStyle={styles.btn} onPress={()=>navigation.navigate("redeem")} />

            <Text style={tw`my-4 text-white pl-1`}>
              Have an account?{' '}
              <Text style={[tw`font-bold`, {color: 'pink'}]}>Login</Text>
            </Text>
          </View>
        </View>

        <Text style={tw`italic text-white`}>
          Continue to agree to the{' '}
          <Text style={tw`font-bold underline`}>User Agreement</Text>
        </Text>
      </View>
    </Wrapper>
  );
};

export default Index;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'pink',
    marginTop: 50,
    borderRadius: 50,
  },
});
