import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import tw from 'tailwind-react-native-classnames';

import Wrapper from '../../../components/onboardWrapper/index';
import TextInput from '../../../components/TextInput/authInput';
import Button from '../../../components/button/index';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import {primaryColor} from '../../../helper/theme';
import {serialIdService} from '../../../api/services/authServices';
import Spinner from 'react-native-loading-spinner-overlay';
import {deviceInfo} from '../../../helper/deviceInfo';
import * as Keychain from 'react-native-keychain';
import {showToast} from '../../../components/toast/index';

const Index = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const {phone} = route.params;

  const loginwithSerialID = async () => {
    setLoading(true);
    try {
      const response = await serialIdService({
        ...deviceInfo,
        phone: phone,
        backup: id,
      });

      const token = 'accessToken';
      await Keychain.resetGenericPassword();

      // Store the credentials
      await Keychain.setGenericPassword(token, response?.data?.token);
      setLoading(false);
      navigation.navigate('dashboard');
    } catch (err) {
      console.log(err);
      console.log(err?.response?.data?.msg);
      showToast(
        'error',
        err?.response?.data?.msg || 'Something went wrong please try again',
      );
      setLoading(false);
    }
  };

  return (
    <Wrapper navigation={navigation}>
      <Spinner
        visible={loading}
        textContent={'Verifying...'}
        textStyle={{color: 'white'}}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
      <View style={[tw` justify-between h-full`]}>
        <View>
          <Text style={tw`text-3xl pl-1 font-bold mt-14 text-white`}>
            Login
          </Text>
          <View style={tw`mt-5`}>
            <TextInput
              keyboardType="numeric"
              placeholder="Phone Number"
              value={phone}
              editable={false}
              icon1={<Icon color="#fff" name="local-phone" size={25} />}
            />
            <TextInput
              placeholder="Serial ID"
              icon1={<Icon1 color="#fff" name="lock" size={25} />}
              icon2={<Icon color="#fff" name="remove-red-eye" size={25} />}
              onChange={id => setId(id)}
            />

            <Button
              text="Login"
              btnStyle={styles.btn}
              onPress={loginwithSerialID}
            />

            <View style={[tw`flex-row items-center`]}>
              <Text
                style={tw`my-4 text-white pl-1 justify-center items-center`}>
                Forgotten Serial ID?
              </Text>
              <Pressable onPress={() => navigation.navigate('redeem')}>
                <Text style={[tw`font-bold ml-2`, {color: primaryColor}]}>
                  Get It
                </Text>
              </Pressable>
            </View>
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
