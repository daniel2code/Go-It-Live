import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {SlideModal} from 'react-native-slide-modal';

import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoRecorder from 'react-native-beautiful-video-recorder';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';

const Index = ({navigation, initialProps}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [
    {cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording},
    {
      toggleFacing,
      touchToFocus,
      textRecognized,
      facesDetected,
      recordVideo,
      setIsRecording,
    },
  ] = useCamera(initialProps);

  useEffect(() => {
    // setModalVisible(true);
    // return () => setModalVisible(false);
  }, []);

  // const cameraRef = useRef(null);

  const Submit = async () => {
    if (cameraRef) {
      const {uri, codec = 'mp4'} = await camera.current.recordAsync();
      console.info(uri);
    }
  };

  const Stop = () => {
    cameraRef.current.stopRecording();
  };

  // const recordVideo = () => {
  //   cameraRef.current
  //     .capture({mode: RNCamera.Constants.CaptureMode.video})
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err));
  // };

  const RenderCam = () => {
    return (
      // <RNCamera
      //   ref={cameraRef}
      //   // onr
      //   style={styles.preview}
      //   defaultVideoQuality={RNCamera.Constants.VideoQuality['480p']}
      //   type={RNCamera.Constants.Type.front}
      //   flashMode={RNCamera.Constants.FlashMode.on}
      //   androidCameraPermissionOptions={{
      //     title: 'Permission to use camera',
      //     message: 'We need your permission to use your camera',
      //     buttonPositive: 'Ok',
      //     buttonNegative: 'Cancel',
      //   }}
      //   androidRecordAudioPermissionOptions={{
      //     title: 'Permission to use audio recording',
      //     message: 'We need your permission to use your audio',
      //     buttonPositive: 'Ok',
      //     buttonNegative: 'Cancel',
      //   }}
      // />

      <RNCamera
        ref={cameraRef}
        autoFocusPointOfInterest={autoFocusPoint.normalized}
        type={type}
        ratio={ratio}
        style={{flex: 1}}
        autoFocus={autoFocus}
        onTextRecognized={textRecognized}
        onFacesDetected={facesDetected}
      />
    );
  };

  // const videoRecord = async () => {
  //   if (cameraRef && cameraRef.current) {
  //     cameraRef.current.open({maxLength: 30}, data => {
  //       console.log('captured data', data);
  //     });
  //   }
  // };

  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', height: 100}}>
          <View style={{width: '30%'}}>{RenderCam()}</View>
          <View
            style={{
              width: '70%',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>
              Timer Here{' '}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
              Totel Question{' '}
            </Text>
          </View>
        </View>

        <View style={{backgroundColor: 'pink', margin: 10}}>
          {/* <Text
            style={{
              textAlign: 'center',
              margin: 5,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Ulive Test Title
          </Text> */}
          <View>
            {/* <View>
              <Text style={{margin: 20, color: "black"}}>
                Q.1) Most cameras have a Auto Focus feature. It adjusts your
                camera lens position automatically depending on the pixels seen
                by your camera.
              </Text>
            </View> */}
            {/* <View>
              {[1, 2, 3, 4].map(data => {
                return (
                  <Text
                    key={data}
                    style={{
                      color: "black",
                      margin: 15,
                      borderBottomColor: 'gray',
                      borderBottomWidth: 1,
                    }}>
                    option is {data}
                  </Text>
                );
              })}
            </View> */}
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Pressable
            // onPress={Submit}
            onPress={recordVideo}
            style={{
              height: 50,
              backgroundColor: '#000',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
              Submit
            </Text>
          </Pressable>
          {/* <Pressable onPress={Stop} 
           style={{height: 50,backgroundColor:'black',width:'50%',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Stop Rec</Text>
          </Pressable> */}
        </View>
      </View>
    </>
    // <SlideModal
    //   // modalType="iOS Form Sheet"
    //   modalType="iOS Bottom Sheet"
    //   modalVisible={modalVisible}
    //   screenContainer={
    //     <>
    //       <VideoRecorder ref={cameraRef} />
    //     </>
    //   }
    //   modalContainer={
    //     <View style={tw`w-full absolute`}>
    //       <TouchableOpacity
    //         style={[tw`w-full flex-row items-center mt-5 px-4`, styles.box]}
    //         onPress={() => videoRecord()}>
    //         <View style={[tw`items-center justify-center`, styles.iconBox]}>
    //           <Icon name="ondemand-video" size={20} color="white" />
    //         </View>

    //         <Text style={[tw` text-sm ml-4 font-bold`, {color: '#000'}]}>
    //           Go It Live
    //         </Text>
    //       </TouchableOpacity>
    //     </View>
    //   }
    //   modalHeaderTitle="Header Title"
    //   pressDone={() => setModalVisible(!modalVisible)}
    //   pressCancel={() => navigation.navigate('Home')}
    //   darkMode={false}
    //   doneDisabled={true}
    //   // customStyleCancelText
    //   // customStyleModalHeaderContainer
    // />
  );
};

export default Index;

const styles = StyleSheet.create({
  // iconBox: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 30,
  //   backgroundColor: '#000',
  // },

  // box: {
  //   // backgroundColor: "rgba(255, 255, 255, 0.5)"
  // },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'pink',
  },
  preview: {
    width: '100%',
    height: 55,
  },
});
