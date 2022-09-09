import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';

import tw from 'tailwind-react-native-classnames';
import OTPTextInput from 'react-native-otp-textinput';
import {showToast} from '../../../components/toast/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Wrapper from '../../../components/onboardWrapper/';
import Spinner from 'react-native-loading-spinner-overlay';
import Button from '../../../components/button/index';
import {
  verifyService,
  resendSmsService,
} from '../../../api/services/authServices';
// import {BackPressHandler} from '../../../helper/backHandler';
import {deviceInfo} from '../../../helper/deviceInfo';
import {primaryColor} from '../../../helper/theme';
// import * as Keychain from 'react-native-keychain';

const Index = ({route, navigation}) => {
  const {phone} = route.params;
  const [loading, setIsLoading] = useState(false);
  const [pin, setPin] = useState('');
  const [resendSms, setResendSms] = useState(false);

  const handleNoResendSmS = () => {
    showToast('error', 'Please wait after a minute');
  };

  const handleResendSMS = async () => {
    setResendSms(true);

    try {
      await resendSmsService({...deviceInfo, phone: phone});
    } catch (error) {
      if (error) {
        return showToast(
          'error',
          error?.response?.data || 'Something went wrong please try again',
        );
        // setToastMessage({type: 'error', text: error?.response?.data});
      } else {
        showToast(
          'error',
          error?.response?.data || 'Something went wrong please try again',
        );
      }
    }
  };

  useEffect(() => {
    if (resendSms === true) {
      setTimeout(() => {
        setResendSms(false);
      }, 6000);
    }
  }, []);

  const verfyCode = async () => {
    setIsLoading(true);
    try {
      const response = await verifyService({...deviceInfo, sms: pin});
      // console.log(response?.data?.createAccount);
      console.log(response?.data);
      showToast('success', 'Verification successful');
      setIsLoading(false);

      // const token = 'accessToken';
      navigation.navigate('signup', {
        phone: phone,
      });

      // if (response?.data?.createAccount === true) {
      // } else {
      //   // await Keychain.resetGenericPassword();

      //   // Store the credentials
      //   await Keychain.setGenericPassword(token, response?.data?.token);

      //   navigation.navigate('dashboard', {
      //     phone: phone,
      //   });
      // }
    } catch (error) {
      setIsLoading(false);
      if (error) {
        return showToast(
          'error',
          error?.response?.data?.msg || 'Something went wrong please try again',
        );
        // setToastMessage({type: 'error', text: error?.response?.data});
      } else {
        showToast(
          'error',
          error?.response?.data?.msg || 'Something went wrong please try again',
        );
      }
    }
  };

  return (
    <Wrapper hideIcon={false} navigation={navigation}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: 'white'}}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
      <View style={[tw` justify-between h-full w-full`]}>
        <View>
          <Text style={tw`text-center text-3xl font-bold mt-14 text-white`}>
            What's the code?
          </Text>

          <Text style={tw` text-center my-3`}>
            Enter the 4-digit code SMS sent to:
            <Text style={tw`font-bold text-white`}>{phone || ''}</Text>
          </Text>

          <View style={[tw` items-center relative`, styles.inpBox]}>
            {/* <View style={[tw`absolute`, styles.overlay]} /> */}
            {/* <OTP
              key={Math.random()}
              codeCount={4}
              containerStyle={{marginTop: 10, width: '80%'}}
              otpStyles={[tw`rounded`, styles.inp]}
              onTyping={()=>setOtp('1234')}
            /> */}

            <OTPTextInput
              defaultValue={pin}
              textInputStyle={[tw`rounded`, styles.inp]}
              containerStyle={{marginTop: 10, width: '80%', marginRight: '2%'}}
              // tintColor="No"
              offTintColor="Yes"
              handleTextChange={otpPin => setPin(otpPin)}
              keyboardType="default"
            />
            {/* <Text style={tw`my-4`}>
              This process is{' '}
              <Text style={[tw`font-bold`, {color: primaryColor}]}>
                Automatic
              </Text>
            </Text> */}
          </View>

          <Button text="Submit" btnStyle={styles.btn} onPress={verfyCode} />
        </View>

        <Pressable
          style={tw`items-center flex-row`}
          onPress={resendSms === false ? handleResendSMS : handleNoResendSmS}>
          <Text style={tw`text-white font-bold`}>RESEND SMS</Text>
          <Icon name="navigate-next" size={20} style={tw`ml-1`} />
        </Pressable>
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
    width: 70,
    height: 'auto',
    color: 'white',
  },

  btn: {
    backgroundColor: primaryColor,
    marginTop: 25,
    borderRadius: 50,
  },

  // overlay: {
  //   width: '100%',
  //   backgroundColor: 'red',
  //   height: 200,
  //   zIndex: 2,
  //   backgroundColor: 'transparent',
  // },
});
