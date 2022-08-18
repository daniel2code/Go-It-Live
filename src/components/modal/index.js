import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const Index = ({children, open, close, containerStyle}) => {
  return (
    <>
      {open && (
        <TouchableOpacity style={styles.container} onPress={close} >
          <View style={[tw`absolute w-full pt-2 pb-5 px-3`, styles.modalBox, containerStyle]}>
            <View style={[tw`w-full flex items-center`, styles.notchBox]}>
              <View style={styles.notch} />
            </View>
            {children}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Index;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    zIndex: 2,
  },

  modalBox: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 58,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  notch: {
    width: 40,
    height: 3,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
});
