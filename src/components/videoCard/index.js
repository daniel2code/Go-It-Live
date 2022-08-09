import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Video from 'react-native-video';

const Index = ({ url }) => {
  return (
    <>
      <Video
        // source={{ uri: url}}
        source={require('../../assets/bg.mp4')}
        resizeMode="cover"
        // repeat={true}
        playInBackground={true}
        style={styles.videoCard} 
      />
      {/* <Text>{name}</Text> */}
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  videoCard: {
    width: '100%',
    height: "100%",
    margin: 2,
  },
});
