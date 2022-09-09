import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Alert,
  // DevSettings,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import tw from 'tailwind-react-native-classnames';

import {shadowProp} from '../../../../helper/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {requestId} from '../../../../api/services/userServices';
import {showToast} from '../../../../components/toast';
import Spinner from 'react-native-loading-spinner-overlay';
import * as Keychain from 'react-native-keychain';

const Index = ({navigation}) => {
  const [checkLogin, setCheckLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRequestId = async () => {
    setLoading(true);
    try {
      const response = await requestId();
      console.log(response);
      showToast('success', 'Successfully changed backup code');
      setLoading(false);
    } catch (err) {
      console.log(err);
      showToast('error', 'An error occured, please try again');
      setLoading(false);
    }
  };

  const confirmRequestId = () => {
    Alert.alert(
      'Confirm Backup Code Reset',
      'Are you sure you want to change you backup code?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'OK', onPress: () => handleRequestId()},
      ],
    );
  };

  const handleLogout = () => {
    // try {
    Keychain.resetGenericPassword();
    // DevSettings.reload()
    navigation.navigate('onboard');
    console.log('firedddddddddddd');
    // } catch (err) {
    // console.log(err);
    // }
  };

  const confirmLogout = () =>
    Alert.alert('Confirm Logout', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'OK', onPress: () => setCheckLogin(true)},
    ]);

  useEffect(() => {
    if (checkLogin === true) {
      handleLogout();
    }
  }, [checkLogin]);

  return (
    <View style={[tw`flex-1`]}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: 'white'}}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
      <View
        style={[
          tw`h-14 w-full flex-row  items-center px-4`,
          styles.topbar,
          shadowProp,
        ]}>
        <Icon
          name="keyboard-backspace"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={[tw`text-black font-semibold ml-3`, {fontSize: 20}]}>
          Settings
        </Text>
      </View>

      <View style={[tw`flex-1 justify-between px-3 mt-5`, {paddingBottom: 60}]}>
        <View style={[tw`w-full`]}>
          <View style={[tw`flex-row justify-between items-center py-3`]}>
            <View style={[tw`flex-row `]}>
              <Icon1 size={22} name="lock-closed-outline" color="#000" />
              <Text style={[tw`ml-3`, {fontSize: 17, color: '#000'}]}>
                Activate Privacy
              </Text>
            </View>

            <Switch value={true} />
          </View>

          <View style={[tw`flex-row justify-between items-center py-4`]}>
            <TouchableOpacity
              style={[tw`flex-row `]}
              onPress={() => navigation.navigate('Withdrawal')}>
              <Icon1 size={22} name="lock-closed-outline" color="#000" />
              <Text style={[tw`ml-3`, {fontSize: 17, color: '#000'}]}>
                Change Withdrawal Account
              </Text>
            </TouchableOpacity>

            <Switch value={true} />
          </View>

          <View style={[tw`flex-row justify-between items-center py-4`]}>
            <View style={[tw`flex-row `]}>
              <Icon1 size={22} name="lock-closed-outline" color="#000" />
              <Text style={[tw`ml-3`, {fontSize: 17, color: '#000'}]}>
                Activate Privacy
              </Text>
            </View>

            <Switch value={true} />
          </View>

          <View style={[tw`flex-row justify-between items-center py-4`]}>
            <View style={[tw`flex-row `]}>
              <Icon1 size={22} name="lock-closed-outline" color="#000" />
              <Text style={[tw`ml-3`, {fontSize: 17, color: '#000'}]}>
                Activate Privacy
              </Text>
            </View>

            <Switch value={true} />
          </View>

          <TouchableOpacity
            onPress={confirmRequestId}
            style={[tw`flex-row justify-between items-center py-4`]}>
            <View style={[tw`flex-row `]}>
              <Icon1 size={22} name="lock-closed-outline" color="#000" />
              <Text style={[tw`ml-3`, {fontSize: 17, color: '#000'}]}>
                Request New Backup Code
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[tw`pb-7 w-full`]}>
          {/* <Text style={[tw`font-bold text-black`, {fontSize: 16}]}>Logins</Text> */}

          <TouchableOpacity onPress={confirmLogout}>
            <Text style={[tw`mt-5`, {color: 'gray', fontSize: 18}]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#fff',
  },
});
