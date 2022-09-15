import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import tw from 'tailwind-react-native-classnames';

import Wrapper from '../../../components/onboardWrapper/index';
import TextInput from '../../../components/TextInput/authInput';
import Button from '../../../components/button/index';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import {registerService} from '../../../api/services/authServices';
import {useFormik} from 'formik';
import {showToast} from '../../../components/toast/index';
import {deviceInfo} from '../../../helper/deviceInfo';
import Spinner from 'react-native-loading-spinner-overlay';
import {BackPressHandler} from '../../../helper/backHandler';
import {signUpSchema} from '../../../helper/validations';
import {primaryColor} from '../../../helper/theme';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Keychain from 'react-native-keychain';


const Index = ({navigation, route}) => {
  const {phone} = route.params;
  const [loading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGender, setOpenGender] = useState(false);
  const [genderValue, setGenderValue] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    {label: 'Business', value: 'business'},
    {label: 'Student', value: 'student'},
  ]);

  const [gender, setGender] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ]);

  useEffect(() => {
    BackPressHandler();
  }, []);

  const {handleChange, handleSubmit, values, errors} = useFormik({
    initialValues: {
      phone: phone,
      email: '',
      account_type: '',
      full_name: '',
      username: '',
      gender: '',
      country: 'Nigeria',
      state: 'Abia',
    },
    validationSchema: signUpSchema,
    onSubmit: async values => {
      setIsLoading(true);
      console.log({...deviceInfo, ...values});
      try {
        const response = await registerService({...deviceInfo, ...values});
        console.log(response.data);
        setIsLoading(false);

        const token = 'accessToken';
        await Keychain.resetGenericPassword();

        // Store the credentials
        await Keychain.setGenericPassword(token, response?.data?.token);
        navigation.navigate('clipboard');
      } catch (error) {
        setIsLoading(false);
        if (error) {
          console.log(error, error?.response?.msg);
          // navigation.navigate('clipboard');
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
    },
  });

  return (
    <Wrapper navigation={navigation} hideIcon={true}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: 'white'}}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
      <View style={[tw` justify-between h-full`]}>
        <View>
          <Text style={tw`text-3xl pl-1 font-bold mt-14 text-white`}>
            Create Account
          </Text>
          <View style={tw`mt-5`}>
            <TextInput
              placeholder="Full Name"
              icon1={<Icon2 color="#fff" name="user" size={25} />}
              onChange={handleChange('full_name')}
            />
            {errors.full_name && (
              <Text style={styles.textErr}> {errors && errors.full_name}</Text>
            )}

            <TextInput
              placeholder="User Name"
              icon1={<Icon1 color="#fff" name="user" size={25} />}
              onChange={handleChange('username')}
            />
            {errors.username && (
              <Text style={styles.textErr}> {errors && errors.username}</Text>
            )}

            <TextInput
              placeholder="Email"
              icon1={<Icon color="#fff" name="email" size={25} />}
              onChange={handleChange('email')}
            />
            {errors.email && (
              <Text style={styles.textErr}> {errors && errors.email}</Text>
            )}

            <TextInput
              placeholder="Phone"
              icon1={<Icon color="#fff" name="email" size={25} />}
              // onChange={handleChange('phone')}
              value={phone}
              style={{color: 'white'}}
              editable={false}
            />

            {/* <TextInput
              placeholder="Password"
              icon1={<Icon1 color="#fff" name="lock" size={25} />}
              icon2={<Icon color="#fff" name="remove-red-eye" size={25} />}
              onChange={handleChange('full_name')}
            /> */}

            <DropDownPicker
              open={openGender}
              value={genderValue}
              items={gender}
              setOpen={setOpenGender}
              setValue={setGenderValue}
              setItems={setGender}
              onChangeValue={handleChange('gender')}
              containerStyle={styles.selectGenderStyle}
              style={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                color: 'black',
              }}
              textStyle={{color: 'black'}}
            />

            {errors.gender && (
              <Text style={styles.textErr}> {errors && errors.gender}</Text>
            )}

            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onChangeValue={handleChange('account_type')}
              containerStyle={styles.selectStyle}
              style={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                color: 'black',
              }}
              textStyle={{color: 'black'}}
            />
            {errors.account_type && (
              <Text style={styles.textErr}>
                {' '}
                {errors && errors.account_type}
              </Text>
            )}

            <Button
              text="Sign Up"
              btnStyle={styles.btn}
              onPress={handleSubmit}
            />

            {/* <Text style={tw`my-4 text-white pl-1`}>
              Have an account?{' '}
              <Text style={[tw`font-bold`, {color: primaryColor}]}>Login</Text>
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
    marginTop: 70,
    borderRadius: 50,
  },

  selectStyle: {
    width: '100%',
    height: 45,
    borderRadius: 50,
    paddingHorizontal: 13,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginTop: 17,
    color: 'black',
    position: 'relative',
    zIndex: 2,
  },

  selectGenderStyle: {
    width: '100%',
    height: 45,
    borderRadius: 50,
    paddingHorizontal: 13,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginTop: 17,
    color: 'black',
    position: 'relative',
    zIndex: 3,
  },

  textErr: {
    color: 'red',
    fontSize: 12,
  },
});
