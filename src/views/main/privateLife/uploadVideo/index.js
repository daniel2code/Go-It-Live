import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

import tw from 'tailwind-react-native-classnames';
import Button from '../../../../components/button/index';
import {primaryColor} from '../../../../helper/theme';
import * as ImagePicker from 'react-native-image-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import {fetchUser} from '../../../../api/services/userServices';
import {useQuery} from 'react-query';
import Video from 'react-native-video';
import {showToast} from '../../../../components/toast/index';
import * as Keychain from 'react-native-keychain';
import Icon from 'react-native-vector-icons/AntDesign';
import {BackPressHandler} from '../../../../helper/backHandler';

const Index = ({navigation}) => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const {data, isLoading} = useQuery('User', fetchUser);

  console.log(video);

  useEffect(() => {
    BackPressHandler();
  }, []);

  const uploadVideo = async () => {
    let formData = new FormData();
    const credentials = await Keychain.getGenericPassword();
    setLoading(true);

    formData.append('file', {
      uri: video?.assets[0].uri,
      type: video?.assets[0].type,
      name: video?.assets[0].fileName,
    });

    fetch('http://192.168.176.94:4000/api/v1/user/private-live', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${credentials.password}`,
      },
      body: formData,
    })
      .then(response => {
        return response.json();
      })
      .then(async res => {
        setLoading(false);
        console.log(res);
        if (res.error == 0) {
          navigation.navigate('Private');
          showToast('success', 'Video uploaded successfully');
        }
      })
      .catch(error => {
        console.log('=============', error);
        setLoading(false);
        showToast(
          'error',
          error?.response?.data?.msg || 'Something went wrong please try again',
        );
      });
  };

  return (
    <>
      <Spinner
        visible={loading || isLoading}
        textContent={'Loading...'}
        textStyle={{color: 'white'}}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />

      <View style={[tw`flex-1 bg-white px-4 pt-1`]}>
        <View style={[tw`h-14 w-full flex-row items-center`]}>
          <Icon
            name="close"
            size={27}
            color="black"
            onPress={() => navigation.navigate('Home')}
          />
        </View>

        <Text style={[tw`text-black text-2xl font-bold`]}>
          Hi {data?.data?.user?.username},
        </Text>
        <Text style={[tw`text-sm text-black my-4 `]}>
          You are one step to access the private life section, please upload
          your video that is less than a minute.
        </Text>
        <View style={[tw`items-center justify-center`]}>
          {!video && (
            <Image
              source={require('../../../../assets/upload.png')}
              style={{width: 200, height: 200, marginVertical: 10}}
            />
          )}

          {video && (
            <View style={styles.videoBox} >
              <Video
                source={{uri: video?.assets[0]?.uri}}
                resizeMode="cover"
                repeat={false}
                playWhenInactive={false}
                style={styles.bgImg}
                // playInBackground={false}
                controls={true}
              />
            </View>
          )}

          <TouchableOpacity
            onPress={() =>
              ImagePicker.launchImageLibrary(
                {
                  mediaType: 'video',
                  includeBase64: true,
                  maxHeight: 200,
                  maxWidth: 200,
                },
                response => {
                  setVideo(response);
                },
              )
            }>
            <Text style={[tw`ml-1 mt-7`, styles.descText]}>
              Click to upload your video
            </Text>
          </TouchableOpacity>

          <Button
            text="Save Video"
            btnStyle={styles.btn}
            onPress={video && uploadVideo}
          />
        </View>
      </View>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: primaryColor,
    marginTop: 40,
    borderRadius: 30,
  },

  descText: {
    color: primaryColor,
    fontSize: 15,
    fontWeight: '700',
  },

  videoBox: {
    width: "100%",
    height: 400,
  },

  bgImg: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});
