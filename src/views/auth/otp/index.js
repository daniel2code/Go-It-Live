import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import tw from 'tailwind-react-native-classnames';
import {OTP} from 'react-native-otp-form';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Wrapper from '../../../components/onboardWrapper/';

const Index = () => {
  return (
    <Wrapper>
      <View style={[tw` justify-between h-full`]}>
        <View>
          <Text style={tw`text-center text-3xl font-bold mt-14 text-white`}>
            What's the code?
          </Text>

          <Text style={tw` text-center my-3`}>
            Enter the 4-digit code in SMS sent to:
            <Text style={tw`font-bold text-white`}> +23490784653</Text>
          </Text>

          <View style={[tw`justify-center items-center `, styles.inpBox]}>
            <OTP
              key={Math.random()}
              codeCount={4}
              containerStyle={{marginTop: 10, width: '80%'}}
              otpStyles={[tw`rounded`, styles.inp]}
            />
            <Text style={tw`my-4`}>
              Didn't get a code?{' '}
              <Text style={[tw`font-bold`, {color: 'pink'}]}>
                Request FREE call
              </Text>
            </Text>
          </View>
        </View>

        <View style={tw`items-center flex-row`}>
          <Text style={tw`text-white font-bold`}>RESEND SMS</Text>
          <Icon name="navigate-next" size={20} style={tw`ml-1`} />
        </View>
      </View>
    </Wrapper>
  );
};

export default Index;

const styles = StyleSheet.create({
  inpBox: {
    width: '100%',
  },

  inp: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '25%',
    height: 'auto',
  },
});
