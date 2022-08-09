import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/AntDesign';

const Index = ({ navigation }) => {
  return (
    <View style={tw`flex-1`}>
      <View style={[tw`h-14 w-full flex-row items-center pl-2`]}>
        <Icon name="close" size={27} color="black" onPress={()=>navigation.navigate('ProfileHome')} />
        <Text style={[tw`text-black font-semibold ml-4`, {fontSize: 20}]}>
          Edit Profile
        </Text>
      </View>

      <View style={tw`flex-1 mt-8 px-5 items-center`}>
        <View style={tw`items-center`}>
          <Image
            source={require('../../../../assets/rbg.jpg')}
            style={[styles.pImg]}
          />
          <Text style={[tw`ml-1 mt-1`, styles.descText]}>
            Change Profile Picture
          </Text>
        </View>

        <View style={tw`w-full mt-9`}>
          <View>
            <Text style={[tw`text-xs`, {color: 'gray'}]}>Name</Text>
            <TextInput style={styles.inp} value="John Rowlings" />
          </View>

          <View style={tw`w-full mt-7`}>
            <Text style={[tw`text-xs`, {color: 'gray'}]}>Username</Text>
            <TextInput style={styles.inp} value="Pfeeling_Bossman" />
          </View>

          <View style={tw`w-full mt-7`}>
            <Text style={[tw`text-xs`, {color: 'gray'}]}>Bio</Text>
            <TextInput
              style={styles.inp}
              value="I believe in making the impossible possible because there’s no fun in
          giving up. Listen to the story of my life"
            />
          </View>

          <TouchableOpacity
            style={[tw`py-3 w-full mt-10 items-center`, styles.saveBtn]}
            onPress={() => navigation.navigate('EditProfile')}>
            <Text style={tw`text-white font-bold text-sm`}>Save </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  descText: {
    color: 'blue',
    fontSize: 16,
  },

  pImg: {
    width: 75,
    height: 75,
    borderRadius: 40,
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
    backgroundColor: 'pink',
    borderRadius: 20,
  },
});
