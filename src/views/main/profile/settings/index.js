import {StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

import {shadowProp} from '../../../../helper/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';

const Index = ({ navigation }) => {
  return (
    <View style={[tw`flex-1`]}>
      <View
        style={[
          tw`h-14 w-full flex-row  items-center px-4`,
          styles.topbar,
          shadowProp,
        ]}>
        <Icon name="keyboard-backspace" size={30} color="black" onPress={()=>navigation.goBack()} />
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
            <TouchableOpacity style={[tw`flex-row `]} onPress={()=>navigation.navigate('Withdrawal')} >
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

          <View style={[tw`flex-row justify-between items-center py-4`]}>
            <View style={[tw`flex-row `]}>
              <Icon1 size={22} name="lock-closed-outline" color="#000" />
              <Text style={[tw`ml-3`, {fontSize: 17, color: '#000'}]}>
                Activate Privacy
              </Text>
            </View>

            <Switch value={true} />
          </View>
        </View>

        <View style={[tw`pb-7 w-full`]} >
          <Text style={[tw`font-bold text-black`, {fontSize: 16}]}>Logins</Text>

          <TouchableOpacity>
            <Text style={[tw`mt-5`, {color: 'gray',fontSize: 18}]}>Logout</Text>
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
