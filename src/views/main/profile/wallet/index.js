import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';

import {shadowProp} from '../../../../helper/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Fontisto';
import tw from 'tailwind-react-native-classnames';
import {primaryColor} from '../../../../helper/theme';

const Index = ({navigation}) => {
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
          Wallet
        </Text>
      </View>

      <View style={[tw`px-4`]}>
        <View style={[tw`justify-between items-center flex-row w-full mt-7`]}>
          <View>
            <Text style={[tw`text-2xl font-bold text-black`]}>₦20,000</Text>
            <Text style={[tw`text-black font-semibold`]}>My balance</Text>
          </View>

          <Image
            source={require('../../../../assets/rbg.jpg')}
            style={[tw`rounded-full`, {width: 45, height: 45}]}
          />
        </View>

        <View
          style={[
            tw`mt-10 rounded py-5 justify-around flex-row`,
            {backgroundColor: primaryColor},
          ]}>
          <Pressable
            style={[tw`justify-center items-center`]}
            onPress={() => navigation.navigate('Deposit')}>
            <Icon3 name="arrow-swap" size={28} color="#fff" />
            <Text style={[tw`text-sm text-white font-semibold`]}>Deposit</Text>
          </Pressable>

          <Pressable
            style={[tw`justify-center items-center`]}
            onPress={() => navigation.navigate('Withdrawal')}>
            <Icon1 name="creditcard" size={28} color="#fff" />
            <Text style={[tw`text-sm text-white font-semibold`]}>Withdraw</Text>
          </Pressable>

          <Pressable
            style={[tw`justify-center items-center`]}
            onPress={() => navigation.navigate('Income')}>
            <Icon2 name="money" size={28} color="#fff" />
            <Text style={[tw`text-sm text-white font-semibold`]}>Income</Text>
          </Pressable>
        </View>

        <View style={[tw`mt-8`]}>
          <Text style={[tw`text-black font-bold text-lg`]}>
            Transactions History
          </Text>

          <ScrollView style={[tw`mt-1`]}>
            <View style={[tw`flex-row justify-between mt-4`]}>
              <View>
                <Text style={[tw`text-black font-bold`]}>Deposit</Text>
                <Text style={[tw`text-black mt-1`]}>20 August, 2022</Text>
              </View>
              <Text style={[tw`text-black font-semibold`]}>₦10,000</Text>
            </View>

            <View style={[tw`flex-row justify-between mt-4`]}>
              <View>
                <Text style={[tw`text-black font-bold`]}>Withdraw</Text>
                <Text style={[tw`text-black mt-1`]}>20 August, 2022</Text>
              </View>
              <Text style={[tw`text-black font-semibold`]}>₦10,000</Text>
            </View>

            <View style={[tw`flex-row justify-between mt-4`]}>
              <View>
                <Text style={[tw`text-black font-bold`]}>Deposit</Text>
                <Text style={[tw`text-black mt-1`]}>20 August, 2022</Text>
              </View>
              <Text style={[tw`text-black font-semibold`]}>₦10,000</Text>
            </View>

            <View style={[tw`flex-row justify-between mt-4`]}>
              <View>
                <Text style={[tw`text-black font-bold`]}>Withdraw</Text>
                <Text style={[tw`text-black mt-1`]}>20 August, 2022</Text>
              </View>
              <Text style={[tw`text-black font-semibold`]}>₦10,000</Text>
            </View>

            <View style={[tw`flex-row justify-between mt-4`]}>
              <View>
                <Text style={[tw`text-black font-bold`]}>Deposit</Text>
                <Text style={[tw`text-black mt-1`]}>20 August, 2022</Text>
              </View>
              <Text style={[tw`text-black font-semibold`]}>₦10,000</Text>
            </View>
          </ScrollView>
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
