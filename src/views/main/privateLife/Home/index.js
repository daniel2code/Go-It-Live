import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import PostViewer from '../../../../components/postView/index';

const Index = ({navigation}) => {

  return (
    <View style={{flex: 1}}>
      <PostViewer navigation={navigation} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
