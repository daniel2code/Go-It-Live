import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

import Wrapper from '../../../components/onboardWrapper/index';
import TextInput from '../../../components/TextInput/authInput';
import Button from '../../../components/button/index';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import {primaryColor} from '../../../helper/theme';

const Index = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <View style={[tw` justify-between h-full`]}>
        <View>
          <Text style={tw`text-3xl pl-1 font-bold mt-14 text-white`}>
            Login
          </Text>
          <View style={tw`mt-5`}>
            <TextInput
              keyboardType="numeric"
              placeholder="Phone Number"
              icon1={<Icon color="#fff" name="local-phone" size={25} />}
            />
            <TextInput
              placeholder="Password"
              icon1={<Icon1 color="#fff" name="lock" size={25} />}
              icon2={<Icon color="#fff" name="remove-red-eye" size={25} />}
            />

            <Button
              text="Login"
              btnStyle={styles.btn}
              onPress={() => navigation.navigate('dashboard')}
            />

            <Text style={tw`my-4 text-white pl-1`}>
              Don't have an account?{' '}
              <Text style={[tw`font-bold`, {color: primaryColor}]}>
                {' '}
                Sign Up
              </Text>
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
    backgroundColor: primaryColor,
    marginTop: 50,
    borderRadius: 50,
  },
});
