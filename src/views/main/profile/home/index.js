import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import tw from 'tailwind-react-native-classnames';
import VideoCard from '../../../../components/videoCard/index';
import Modal from '../../../../components/modal/index';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {shadowProp} from '../../../../helper/theme';

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
  const [openModal, setOpenModal] = useState(false);

  const handleChangeModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    return () => {
      handleChangeModal();
    };
  }, []);

  return (
    <View style={[tw`flex-1`, {backgroundColor: 'white'}]}>
      {/* Modal box opens when clicked */}

      <View
        style={[
          tw`h-14 w-full flex-row justify-between items-center px-4`,
          styles.topbar,
          shadowProp,
        ]}>
        <Text style={[tw`text-black font-semibold `, {fontSize: 20}]}>
          @Pfeelings
        </Text>
        <Icon1
          name="menu"
          size={30}
          color="black"
          onPress={handleChangeModal}
        />
      </View>

      <View style={tw`px-4 pt-4 flex-1`}>
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

      <Modal open={openModal} close={handleChangeModal}>
        <TouchableOpacity
          style={[tw`w-full flex-row items-center mt-5 px-4`, styles.box]}>
          <Icon name="setting" size={30} color="#000" />

          <Text
            style={[tw` ml-4`, {color: '#000', fontSize: 17}]}
            onPress={() => navigation.navigate('Settings')}>
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[tw`w-full flex-row items-center mt-5 px-4`, styles.box]}>
          <Icon1 name="md-timer-outline" size={30} color="#000" />

          <Text style={[tw` ml-4`, {color: '#000', fontSize: 17}]}>
            Your activity
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[tw`w-full flex-row items-center mt-5 px-4`, styles.box]}
          onPress={() => navigation.navigate('Wallet')}>
          <Icon name="wallet" size={27} color="#000" />

          <Text style={[tw` ml-5`, {color: '#000', fontSize: 17}]}>Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[tw`w-full flex-row items-center mt-5 px-4`, styles.box]}>
          <Icon1 name="md-timer-outline" size={30} color="#000" />

          <Text style={[tw` ml-4`, {color: '#000', fontSize: 17}]}>
            Your activity
          </Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#fff',
  },

  shadowProp: {
    elevation: 20,
    shadowColor: '#000',
  },

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
