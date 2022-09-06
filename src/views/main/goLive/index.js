import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';

import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {primaryColor} from '../../../helper/theme';

const Index = ({navigation, initialProps}) => {
  const [
    {cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording},
    {
      toggleFacing,
      touchToFocus,
      textRecognized,
      facesDetected,
      recordVideo,
      stopRecording,
      setIsRecording,
    },
  ] = useCamera(initialProps);

  const startVideoRecord = async () => {
    try {
      setIsRecording(true);
      const data = await recordVideo();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsRecording(false);
    }
  };

  const stopVideoRecording = async () => {
    await stopRecording;
  };

  const RenderCam = () => {
    return (
      <RNCamera
        ref={cameraRef}
        autoFocusPointOfInterest={autoFocusPoint.normalized}
        type={type}
        ratio={ratio}
        style={{flex: 1}}
        autoFocus={autoFocus}
        // onTextRecognized={textRecognized}
        // onFacesDetected={facesDetected}
        captureAudio={false}
      />
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.cameraBox}>{RenderCam()}</View>

        <View
          style={[
            tw`flex-row justify-around w-full items-center`,
            styles.actionBox,
          ]}>
          <View>
            <Icon name="microphone" size={35} color={primaryColor} />
            {/* <Icon name='microphone-slash' size={35} /> */}
          </View>
          <View style={[tw`items-center justify-center`, styles.playBtn]}>
            {isRecording === false ? (
              <Icon
                name="play"
                color="#fff"
                size={35}
                onPress={startVideoRecord}
              />
            ) : (
              <Icon
                name="stop"
                color="#fff"
                size={35}
                onPress={stopVideoRecording}
              />
            )}
          </View>
          <View>
            <Icon1 name="camera" size={32} color={primaryColor} />
            {/* <Icon1 name='camera-off' size={32} color={primaryColor} /> */}
          </View>
        </View>

        {isRecording === true && (
          <View style={[tw`flex-row items-center`, styles.recordBox]}>
            <View style={[tw``, styles.record]} />
            <Text style={[tw`text-white ml-2 text-xs`]}>Recording</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  preview: {
    width: '100%',
    height: 55,
  },

  playBtn: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#e12120',
  },

  cameraBox: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },

  actionBox: {
    position: 'absolute',
    bottom: 70,
  },

  recordBox: {
    position: 'absolute',
    top: 15,
  },

  record: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e12120',
  },
});
