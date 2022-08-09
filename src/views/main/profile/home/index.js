import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

import tw from 'tailwind-react-native-classnames';
import VideoCard from '../../../../components/videoCard/index';

const list = [
  {name: 'video', url: '../../../../assets/bg.mp4'},
  {name: 'audio', url: '../../../../assets/bg.mp4'},
  {name: 'image', url: '../../../../assets/bg.mp4'},
  {name: 'img', url: '../../../../assets/bg.mp4'},
  {name: 'vid', url: '../../../../assets/bg.mp4'},
  {name: 'view', url: '../../../../assets/bg.mp4'},
  {name: 'show', url: '../../../../assets/bg.mp4'},
  {name: 'live', url: '../../../../assets/bg.mp4'},
  {name: 'audio', url: '../../../../assets/bg.mp4'},
  {name: 'image', url: '../../../../assets/bg.mp4'},
  {name: 'img', url: '../../../../assets/bg.mp4'},
  {name: 'vid', url: '../../../../assets/bg.mp4'},
  {name: 'view', url: '../../../../assets/bg.mp4'},
  {name: 'show', url: '../../../../assets/bg.mp4'},
  {name: 'live', url: '../../../../assets/bg.mp4'},
];

const Index = ({navigation}) => {
  return (
    <View style={[tw`flex-1 px-5 pt-4`, {backgroundColor: 'white'}]}>
      <View style={tw`flex-row justify-between items-center`}>
        <Image
          source={require('../../../../assets/rbg.jpg')}
          style={[styles.pImg]}
        />

        {/* <View style={tw`flex-row justify-between flex-1 ml-6`}> */}
        <View style={tw`items-center flex-row`}>
          <Text style={[tw`font-bold`, styles.numText]}>20</Text>
          <Text style={[tw`ml-1`, styles.descText]}>Posts</Text>
        </View>

        <View style={tw`items-center flex-row`}>
          <Text style={[tw`font-bold`, styles.numText]}>120</Text>
          <Text style={[tw`ml-1`, styles.descText]}>Cares</Text>
        </View>

        <View style={tw`items-center flex-row`}>
          <Text style={[tw`font-bold`, styles.numText]}>400</Text>
          <Text style={[tw`ml-1`, styles.descText]}>Caring</Text>
        </View>
        {/* </View> */}
      </View>
      <Text style={[tw`font-bold mt-2`, styles.nameText]}>John Rowlings</Text>
      <Text style={[tw`text-black mt-1`, {lineHeight: 19}]}>
        I believe in making the impossible possible because there’s no fun in
        giving up. Listen to the story of my life
      </Text>

      <TouchableOpacity
        style={[tw`py-2 w-full mt-4 items-center`, styles.editBtn]}
        onPress={() => navigation.navigate('EditProfile')}>
        <Text style={tw`text-white font-bold text-sm`}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={tw`mt-7 flex-row`}>
        <TouchableOpacity
          style={[
            tw`items-center py-2`,
            {width: '50%', borderColor: '#000', borderBottomWidth: 2},
          ]}>
          <Text style={tw`text-black font-bold`}>Posts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[tw`items-center py-2`, {width: '50%'}]}>
          <Text style={tw`text-black font-bold`}>Cares</Text>
        </TouchableOpacity>
      </View>

      <View style={[tw`flex-1 mt-2`]}>
        <FlatList
          numColumns={3}
          data={list}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.videoCard}
                onPress={() => navigation.navigate('Player', {item: item})}>
                <VideoCard />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  pImg: {
    width: 75,
    height: 75,
    borderRadius: 40,
  },

  numText: {
    fontSize: 16,
    color: '#000',
  },

  descText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },

  nameText: {
    color: '#000',
    fontSize: 16,
  },

  editBtn: {
    backgroundColor: 'pink',
    borderRadius: 20,
  },

  videoCard: {
    width: '32.3%',
    height: 140,
    margin: 2,
  },
});
