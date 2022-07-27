import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

import Button from '../../../components/button/index';
import Wrapper from '../../../components/onboardWrapper/index';

const Index = ({ navigation }) => {
  return (
    <>
      <Wrapper>
        <View style={[tw` justify-between h-full` ]}>
          <View>
          <Text style={tw`text-center text-3xl font-bold mt-14 text-white`}>
            What's your number?
          </Text>

          <View
            style={[
              tw`w-full h-11 items-center flex-row pl-12 mt-10`,
              styles.textInpBox,
            ]}>
            <View style={tw`w-12`}>
              <Text>+234</Text>
            </View>
            <TextInput
              keyboardType="numeric"
              placeholder="Phone number"
              style={[tw`py-0 pl-6`, styles.inp]}
            />
          </View>

          <Button text="Submit" btnStyle={styles.btn} onPress={()=>navigation.navigate("login")} />
          </View>

          <Text style={tw`italic text-white`}>
            Continue to agree to the{' '}
            <Text style={tw`font-bold underline`}>User Agreement</Text>
          </Text>
        </View>
      </Wrapper>
    </>
  );
};

const styles = StyleSheet.create({

  textInpBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 30,
  },

  inp: {
    width: '70%',
    borderLeftColor: 'rgba(255, 255, 255, 0.5)',
    borderLeftWidth: 1,
    height: 20,
  },

  btn: {
    backgroundColor: 'pink',
    marginTop: 30,
    borderRadius: 50,
  },
});

export default Index;
