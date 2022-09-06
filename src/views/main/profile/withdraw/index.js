import {
  StyleSheet,
  Text,
  View,
  TextInput,
  // TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

import {shadowProp} from '../../../../helper/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'tailwind-react-native-classnames';
import {primaryColor} from '../../../../helper/theme';
import {showToast} from '../../../../components/toast/index';
import {withdrawFunds} from '../../../../api/services/userServices';

const Index = ({navigation}) => {
  const [amount, setAmount] = useState(null);
  const [account, setAccount] = useState(null);
  const date = new Date().getDay();

  const showError = () => {
    showToast('error', 'Sorry payments are not made today, Fridays only');
  };

  const handleWithdrawFunds = () => {
    if (amount === null || account === null) {
      showToast('error', 'Please ensure the inputs are not empty');
    } else {
      // withdrawFunds({amount: amount, account: account});
    }
  };

  return (
    <View style={[tw`flex-1 `]}>
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
          Withdraw
        </Text>
      </View>

      <View style={tw`p-5`}>
        <View style={[tw`my-5`]}>
          <Text style={[tw`text-black text-xs font-semibold mb-2`]}>
            Enter Amount
          </Text>
          <TextInput
            style={[styles.input]}
            placeholder="eg 10,000"
            placeholderTextColor="#c1c1c1"
            keyboardType="numeric"
            onChangeText={amount => setAmount(amount)}
          />
        </View>

        <View style={[tw`my-5`]}>
          <Text style={[tw`text-black text-xs font-semibold mb-2`]}>
            Enter Account Number
          </Text>
          <TextInput
            style={[styles.input]}
            placeholder="eg 2109867843"
            placeholderTextColor="#c1c1c1"
            keyboardType="numeric"
            onChangeText={acct => setAccount(acct)}
          />
        </View>

        <Pressable
          style={[tw`py-3 w-full mt-10 items-center`, styles.saveBtn]}
          // disabled={date !== 5 ? true : false}
          onPress={date !== 5 ? showError : handleWithdrawFunds}>
          <Text style={tw`text-white font-bold text-sm`}>Withdraw</Text>
        </Pressable>
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
