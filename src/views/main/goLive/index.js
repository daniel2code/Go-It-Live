import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {SlideModal} from 'react-native-slide-modal';

import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoRecorder from 'react-native-beautiful-video-recorder';

const Index = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true);

    return () => setModalVisible(false);
  }, []);

  const cameraRef = useRef(null);

  const videoRecord = async () => {
    if (cameraRef && cameraRef.current) {
      cameraRef.current.open({maxLength: 30}, data => {
        console.log('captured data', data);
      });
    }
  };

  return (
    <SlideModal
      // modalType="iOS Form Sheet"
      modalType="iOS Bottom Sheet"
      modalVisible={modalVisible}
      screenContainer={
        <>
          <VideoRecorder ref={cameraRef} />
        </>
      }
      modalContainer={
        <View style={tw`w-full absolute`}>
          <TouchableOpacity
            style={[tw`w-full flex-row items-center mt-5 px-4`, styles.box]}
            onPress={() => videoRecord()}>
            <View style={[tw`items-center justify-center`, styles.iconBox]}>
              <Icon name="ondemand-video" size={20} color="white" />
            </View>

            <Text style={[tw` text-sm ml-4 font-bold`, {color: '#000'}]}>
              Go It Live
            </Text>
          </TouchableOpacity>
        </View>
      }
      modalHeaderTitle="Header Title"
      pressDone={() => setModalVisible(!modalVisible)}
      pressCancel={() => navigation.navigate('Home')}
      darkMode={false}
      doneDisabled={true}
      // customStyleCancelText
      // customStyleModalHeaderContainer
    />
  );
};

export default Index;

const styles = StyleSheet.create({
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#000',
  },

  box: {
    // backgroundColor: "rgba(255, 255, 255, 0.5)"
  },
});
