import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import React from 'react';

import tw from 'tailwind-react-native-classnames';
import PostViewer from '../../../../components/postView/index';

const Index = ({navigation}) => {
  const List = [
    {name: 'video', url: '../../../../assets/bg.mp4'},
    {name: 'audio', url: '../../../../assets/bg.mp4'},
    {name: 'image', url: '../../../../assets/bg.mp4'},
    {name: 'img', url: '../../../../assets/bg.mp4'},
    {name: 'vid', url: '../../../../assets/bg.mp4'},
    {name: 'view', url: '../../../../assets/bg.mp4'},
    {name: 'show', url: '../../../../assets/bg.mp4'},
    {name: 'live', url: '../../../../assets/bg.mp4'},
  ];

  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{flex: 1}}>

      <FlatList
        numColumns={1}
        data={List}
        renderItem={({item}) => {
          return (
            <View style={[tw`w-full mt-2`,]}>
              <PostViewer navigation={navigation} />
            </View>
          );
        }}
       
        style={[tw`mt-2`, {height: windowHeight - 120}]}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
