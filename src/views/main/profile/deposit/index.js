import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

import {shadowProp} from '../../../../helper/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'tailwind-react-native-classnames';
import {primaryColor} from '../../../../helper/theme';
import {PayWithFlutterwave} from 'flutterwave-react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {FundWallet} from '../../../../api/services/userServices';
import {showToast} from '../../../../components/toast/index';
import Spinner from 'react-native-loading-spinner-overlay';

const Index = ({navigation}) => {
  const [amt, setAmount] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const height = Dimensions.get('window').height;

  const generateTransactionRef = length => {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `flw_tx_ref_${result}`;
  };

  const handleOnRedirect = async e => {
    console.log(e);
    console.log(e?.transaction_id);

    setIsLoading(true);

    try {
      const response = await FundWallet(e?.transaction_id);
      console.log(response);
      setIsLoading(false);
      navigation.navigate('Wallet');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      if (error) {
        return showToast('error', 'Something went wrong please try again');
        // setToastMessage({type: 'error', text: error?.response?.data});
      } else {
        showToast('error', 'Network Error');
      }
    }
  };

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
          Deposit
        </Text>
      </View>

      <View style={tw`p-5`}>
        <View style={[tw`my-5`]}>
          <Text style={[tw`text-black text-xs font-semibold mb-2`]}>
            Enter Amount
          </Text>
          <TextInput
            style={[styles.input]}
            placeholder="eg 20,000"
            placeholderTextColor="#c1c1c1"
            keyboardType="numeric"
            onChangeText={amount => setAmount(amount)}
          />
        </View>

        <Pressable style={[tw`mt-10`]}>
          <PayWithFlutterwave
            onRedirect={handleOnRedirect}
            // onDidInitialize={}
            options={{
              tx_ref: generateTransactionRef(10),
              authorization: 'FLWPUBK_TEST-e0bdd242fa4d4357a7a2421159e3bf42-X',
              customer: {
                email: 'danielnwoke20@gmail.com',
              },
              amount: Number(amt),
              currency: 'NGN',
              payment_options: 'card',
            }}
          />
        </Pressable>

        <Text style={[tw`text-xs mt-5 text-black font-bold`]}>
          NB: You are about to initiate a Flutterwave payment, please note that
          you can always change your payment method, as indicated in the
          screenshot below.
        </Text>

        <Image
          source={require('../../../../assets/payment.png')}
          style={[tw`w-full mt-6`, {height: height / 2}]}
        />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#fff',
  },

  input: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    color: '#000',
    height: 40,
    paddingLeft: 0,
  },

  saveBtn: {
    backgroundColor: primaryColor,
    borderRadius: 20,
  },
});
