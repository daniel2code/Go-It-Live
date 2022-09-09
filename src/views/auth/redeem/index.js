import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

import Wrapper from '../../../components/onboardWrapper/index';
import TextInput from '../../../components/TextInput/authInput';
import Button from '../../../components/button/index';
import {primaryColor} from '../../../helper/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Index = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <View style={[tw` justify-between h-full`]}>
        <View>
          <Text style={tw`text-3xl pl-1 font-bold mt-14 text-white`}>
            Redeem Serial ID
          </Text>
          <View style={tw`mt-5`}>
            <TextInput
              placeholder="Email"
              icon1={<Icon color="#fff" name="email" size={25} />}
              // onChange={handleChange('email')}
            />
            {/* {errors.email && (
              <Text style={styles.textErr}> {errors && errors.email}</Text>
            )} */}

            <Button
              text="Redeem ID"
              btnStyle={styles.btn}
              // onPress={() => navigation.navigate('otp')}
            />

            {/* <Text style={tw`my-4 text-white pl-1`}>
              Don't have an account?
              <Text style={[tw`font-bold`, {color: 'pink'}]}> Sign Up</Text>
            </Text> */}
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
    marginTop: 40,
    borderRadius: 50,
  },
});
