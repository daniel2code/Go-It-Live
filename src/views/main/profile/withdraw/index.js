import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';

import {shadowProp} from '../../../../helper/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'tailwind-react-native-classnames';
import {primaryColor} from '../../../../helper/theme';
import {showToast} from '../../../../components/toast/index';
import {withdrawFunds} from '../../../../api/services/userServices';
import {fetchUser} from '../../../../api/services/userServices';
import {useQuery} from 'react-query';
import Spinner from 'react-native-loading-spinner-overlay';
import {Picker} from '@react-native-picker/picker';
import {Banks} from '../../../../utils/dataHelper';

const Index = ({navigation}) => {
  const [amount, setAmount] = useState('10000');
  const [account, setAccount] = useState(null);
  const [selectedValue, setSelectedValue] = useState('Select your bank');
  const date = new Date().getDay();
  const {data, isLoading, isError, error} = useQuery('User', fetchUser);

  console.log(amount);
  console.log(data?.data?.user?.balance);

  const showError = () => {
    showToast('error', 'Sorry payments are not made today, Fridays only');
  };

  const handleWithdrawFunds = () => {
    // if (amount === null || account === null) {
    //   showToast('error', 'Please ensure the inputs are not empty');
    // } else {
    //   // withdrawFunds({amount: amount, account: account});
    // }
  };

  return (
    <View style={[tw`flex-1 `]}>
      <Spinner
        visible={isLoading}
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
          Withdraw
        </Text>
      </View>

      <View style={tw`p-5`}>
        <View style={[tw`my-5`]}>
          <Text style={[tw`text-black text-xs font-semibold mb-2`]}>
            Total Income Withdrawal
          </Text>
          <TextInput
            style={[styles.input]}
            placeholder="eg 10,000"
            placeholderTextColor="#c1c1c1"
            keyboardType="numeric"
            // onChangeText={amount => setAmount(amount)}
            // value={amount}
            defaultValue={`${data?.data?.user?.balance}`}
            editable={false}
          />
        </View>

        <View style={[tw`my-1`, styles.input, {height: 70}]}>
          <Text style={[tw`text-black text-xs font-semibold mb-2`]}>
            Bank Name
          </Text>
          <Picker
            selectedValue={selectedValue}
            style={[styles.input]}
            onValueChange={itemValue => setSelectedValue(itemValue)}>
            {Banks.map(({name}) => {
              return <Picker.Item label={name} value={name} />;
            })}
          </Picker>
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

        <View style={[tw`my-5`]}>
          <Text style={[tw`text-black text-xs font-semibold mb-2`]}>
            Account Name
          </Text>
          <TextInput
            style={[styles.input]}
            placeholder="John Doe"
            placeholderTextColor="#c1c1c1"
            keyboardType="text"
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
