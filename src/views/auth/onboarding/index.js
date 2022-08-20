import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import tw from 'tailwind-react-native-classnames';

import Button from '../../../components/button/index';
import Wrapper from '../../../components/onboardWrapper/index';
import {useFormik} from 'formik';
import Spinner from 'react-native-loading-spinner-overlay';
import {deviceInfo} from '../../../helper/deviceInfo';
import {loginInService} from '../../../api/services/authServices';
import {introSchema} from '../../../helper/validations';
import {showToast} from '../../../components/toast/index';
import PhoneInput from 'react-native-phone-number-input';
import {BackPressHandler} from '../../../helper/backHandler';
import { primaryColor } from "../../../helper/theme"

const Index = ({navigation}) => {
  const [loading, setIsLoading] = useState(false);
  const phoneInput = useRef(null);

  useEffect(() => {
    BackPressHandler();
  }, []);

  const {handleChange, handleSubmit, values, errors} = useFormik({
    initialValues: {phone: ''},
    validationSchema: introSchema,
    onSubmit: async values => {
      setIsLoading(true);
      console.log({...deviceInfo, ...values});
      try {
        const response = await loginInService({...deviceInfo, ...values});
        console.log(response.data);
        console.log(response?.data?.pin);
        setIsLoading(false);
        navigation.navigate('otp', {
          phone: values.phone,
          pin: response?.data?.pin,
        });
      } catch (error) {
        setIsLoading(false);
        if (error) {
          console.log(error, error?.response?.data);
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
    },
  });

  return (
    <>
      <Wrapper hideIcon={true}>
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={{color: 'white'}}
          overlayColor="rgba(0, 0, 0, 0.7)"
        />
        <View style={[tw` justify-between h-full`]}>
          <View>
            <Text
              style={tw`text-center text-3xl mb-10 font-bold mt-14 text-white`}>
              What's your number?
            </Text>

            {/* <View
              style={[
                tw`w-full h-11 items-center flex-row mt-10`,
                styles.textInpBox,
              ]}> */}
            {/* <View style={tw`w-12`}>
                <Text>+234</Text>
              </View> */}
            {/* <TextInput
                keyboardType="numeric"
                placeholder="Phone number"
                keyboardAppearance="dark"
                style={[tw`py-0 pl-6`, styles.inp]}
                onChangeText={handleChange('phone')}
              /> */}

            <PhoneInput
              ref={phoneInput}
              // defaultValue={value}
              defaultCode="NG"
              layout="first"
              // onChangeText={handleChange('phone')}
              onChangeFormattedText={handleChange('phone')}
              containerStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: 30,
                width: '100%',
                height: 62,
              }}
              textContainerStyle={{
                backgroundColor: 'transparent',
                borderRadius: 30,
                paddingTop: 5,
              }}
              textInputStyle={{color: 'white'}}
              codeTextStyle={{color: 'white'}}
            />
            {/* </View> */}

            <Button
              text="Submit"
              btnStyle={styles.btn}
              onPress={handleSubmit}
            />
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
    backgroundColor: primaryColor,
    marginTop: 25,
    borderRadius: 50,
  },
});

export default Index;
