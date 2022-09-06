import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {shadowProp} from '../../../../helper/theme';
import tw from 'tailwind-react-native-classnames';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {primaryColor} from '../../../../helper/theme';
// import RNSimData from 'react-native-sim-data';

const Index = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  console.log(typeof date);

  return (
    <View style={{flex: 1}}>
      <View
        style={[
          tw`h-14 w-full flex-row items-center px-4`,
          styles.topbar,
          shadowProp,
        ]}>
        <Icon1 name="arrow-back" size={25} color="#000" />
        <Text style={[tw`text-black font-semibold ml-3`, {fontSize: 20}]}>
          Go Live With Friends
        </Text>
      </View>

      <View style={[tw`px-4 pt-10`]}>
        {/* <Button title="Select Date" onPress={() => setOpen(true)} /> */}
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <View style={[tw`mt-1`]}>
          <Text style={[tw`text-xs`, {color: 'gray'}]}>Event Title</Text>
          <TextInput style={styles.inp} value="Chillings" />
        </View>

        <View style={[tw`mt-9`]}>
          <Text style={[tw`text-xs`, {color: 'gray'}]}>Select Date</Text>
          <TextInput
            style={styles.inp}
            value={date}
            onPressIn={() => setOpen(true)}
            // editable={!open}
          />
        </View>

        <TouchableOpacity
          style={[tw`py-3 w-full mt-10 items-center`, styles.saveBtn]}
          onPress={()=>navigation.navigate('answerCall')}
          >
          <Text style={tw`text-white font-bold text-sm`}>Save Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#fff',
  },

  inp: {
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
