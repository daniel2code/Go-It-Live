import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/AntDesign';
import {primaryColor} from '../../../../helper/theme';
import {updateProfile} from '../../../../api/services/userServices';
import {useMutation} from 'react-query';
import {useQuery} from 'react-query';
import {fetchUser} from '../../../../api/services/userServices';
import {useFormik} from 'formik';
import * as ImagePicker from 'react-native-image-picker';

const Index = ({navigation}) => {
  const [image, setImage]=useState()
  const {isLoading, mutate} = useMutation(updateProfile);
  const {data, isError, error} = useQuery('userData', fetchUser);

  // const handleSubmit = () => {
  //   mutate({full_name: '', bio: '', username: ''});
  // };

  const {handleChange, handleSubmit, values, errors} = useFormik({
    initialValues: {
      full_name: '',
      username: '',
      bio: '',
    },
    onSubmit: async values => {
      // await mutate({full_name: '', bio: '', username: ''});
      console.log(values);
    },
  });

  return (
    <View style={tw`flex-1`}>
      <View style={[tw`h-14 w-full flex-row items-center pl-2`]}>
        <Icon
          name="close"
          size={27}
          color="black"
          onPress={() => navigation.goBack()}
        />
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
          <TouchableOpacity
            onPress={() =>
              ImagePicker.launchImageLibrary(
                {
                  mediaType: 'photo',
                  includeBase64: false,
                  maxHeight: 200,
                  maxWidth: 200,
                },
                response => {
                  console.log(response);
                  setImage({resourcePath: response});
                },
              )
            }>
            <Text style={[tw`ml-1 mt-1`, styles.descText]}>
              Change Profile Picture
            </Text>
          </TouchableOpacity>
        </View>

        <View style={tw`w-full mt-9`}>
          <View>
            <Text style={[tw`text-xs`, {color: 'gray'}]}>Full Name</Text>
            <TextInput
              style={styles.inp}
              placeholder="John Rowlings"
              placeholderTextColor="#000"
              onChange={handleChange('full_name')}
            />
          </View>

          <View style={tw`w-full mt-7`}>
            <Text style={[tw`text-xs`, {color: 'gray'}]}>Username</Text>
            <TextInput
              style={styles.inp}
              placeholder="Pfeeling_Bossman"
              placeholderTextColor="#000"
              onChange={handleChange('username')}
            />
          </View>

          <View style={tw`w-full mt-7`}>
            <Text style={[tw`text-xs`, {color: 'gray'}]}>Bio</Text>
            <TextInput
              style={styles.inp}
              placeholder="Don't give up"
              placeholderTextColor="#000"
              onChange={handleChange('bio')}
            />
          </View>

          <TouchableOpacity
            style={[tw`py-3 w-full mt-10 items-center`, styles.saveBtn]}
            onPress={handleSubmit}>
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
    backgroundColor: primaryColor,
    borderRadius: 20,
  },
});
