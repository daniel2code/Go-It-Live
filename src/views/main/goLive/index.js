import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {SlideModal} from 'react-native-slide-modal';

import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Index = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true);

    return () => setModalVisible(false);
  }, []);

  return (
    <SlideModal
      // modalType="iOS Form Sheet"
      modalType="iOS Bottom Sheet"
      modalVisible={modalVisible}
      screenContainer={
        <>
          {/* <Button
            title="Show Modal"
            onPress={() => setModalVisible(!modalVisible)}
          /> */}
        </>
      }
      modalContainer={
        <View style={tw`w-full`}>
          <View
            style={[tw`w-full flex-row items-center mt-5 px-4`, styles.box]}>
            <View style={[tw`items-center justify-center`, styles.iconBox]}>
              <Icon name="ondemand-video" size={25} color="white" />
            </View>

            <Text style={[tw` text-sm ml-4 font-bold`, {color: '#000'}]}>
              Go It Live
            </Text>
          </View>

          <View
            style={[tw`w-full flex-row items-center mt-5 px-4`, styles.box]}>
            <View style={[tw`items-center justify-center`, styles.iconBox]}>
              <Icon name="ondemand-video" size={25} color="white" />
            </View>

            <Text style={[tw` text-sm ml-4 font-bold`, {color: '#000'}]}>
              Go It Live
            </Text>
          </View>
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
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#000',
  },

  box: {
    // backgroundColor: "rgba(255, 255, 255, 0.5)"
  },
});
