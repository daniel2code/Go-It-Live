import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import tw from 'tailwind-react-native-classnames';
import OTPTextInput from 'react-native-otp-textinput';
// import {OTP} from 'react-native-otp-form';
import {showToast} from '../../../components/toast/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Wrapper from '../../../components/onboardWrapper/';
import Spinner from 'react-native-loading-spinner-overlay';
import {verifyService} from '../../../api/services/authServices';
import {BackPressHandler} from '../../../helper/backHandler';
import {deviceInfo} from '../../../helper/deviceInfo';
import {primaryColor} from '../../../helper/theme';

const Index = ({route, navigation}) => {
  const {phone, pin} = route.params;
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const verfyCode = async () => {
      setIsLoading(true);
      try {
        const response = await verifyService({...deviceInfo, sms: pin});
        console.log(response.data);
        showToast('success', 'Verification successful');
        setIsLoading(false);

        setTimeout(() => {
          navigation.navigate('signup', {
            phone: phone,
          });
        }, 2000);
      } catch (error) {
        setIsLoading(false);
        if (error) {
          setTimeout(() => {
            navigation.navigate('onboard');
          }, 2000);

          return showToast(
            'error',
            error?.response?.data ||
              'Something went wrong please restart process',
          );
          // setToastMessage({type: 'error', text: error?.response?.data});
        } else {
          setTimeout(() => {
            navigation.navigate('onboard');
          }, 2000);
          showToast(
            'error',
            error?.response?.data ||
              'Something went wrong please restart process',
          );
        }
      }
    };

    BackPressHandler();
    verfyCode();
  }, [navigation]);

  return (
    <Wrapper hideIcon={true}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: 'white'}}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
      <View style={[tw` justify-between h-full`]}>
        <View>
          <Text style={tw`text-center text-3xl font-bold mt-14 text-white`}>
            What's the code?
          </Text>

          <Text style={tw` text-center my-3`}>
            The 4-digit code SMS sent to:
            <Text style={tw`font-bold text-white`}>{phone || ''}</Text>
          </Text>

          <View
            style={[tw`justify-center items-center relative`, styles.inpBox]}>
            <View style={[tw`absolute`, styles.overlay]} />
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
            />
            <Text style={tw`my-4`}>
              This process is{' '}
              <Text style={[tw`font-bold`, {color: primaryColor}]}>
                Automatic
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
    width: 70,
    height: 'auto',
    color: 'white',
  },

  overlay: {
    width: '100%',
    backgroundColor: 'red',
    height: 200,
    zIndex: 2,
    backgroundColor: 'transparent',
  },
});
