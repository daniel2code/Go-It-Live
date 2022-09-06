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

const handleOnRedirect = () => {
  console.log('sadi');
};

const Index = ({navigation}) => {
  const [amt, setAmount] = useState(null);

  const height = Dimensions.get('window').height;

  return (
    <View style={[tw`flex-1`]}>
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
              authorization: 'FLWPUBK_TEST-26f8e393c1c61bc58ba3402eb9b69a7f-X',
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
