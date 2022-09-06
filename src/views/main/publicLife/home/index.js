import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

// import Video from 'react-native-video'
import tw from 'tailwind-react-native-classnames';
import VideoCard from '../../../../components/videoCard/index';
import Icon from 'react-native-vector-icons/AntDesign';

const list = [
  {name: 'video', url: '../../../../assets/bg.mp4'},
  {name: 'audio', url: '../../../../assets/bg.mp4'},
  {name: 'image', url: '../../../../assets/bg.mp4'},
  {name: 'img', url: '../../../../assets/bg.mp4'},
  {name: 'vid', url: '../../../../assets/bg.mp4'},
  {name: 'view', url: '../../../../assets/bg.mp4'},
  {name: 'show', url: '../../../../assets/bg.mp4'},
  {name: 'live', url: '../../../../assets/bg.mp4'},
  {name: 'video', url: '../../../../assets/bg.mp4'},
  {name: 'audio', url: '../../../../assets/bg.mp4'},
  {name: 'image', url: '../../../../assets/bg.mp4'},
  {name: 'img', url: '../../../../assets/bg.mp4'},
  {name: 'vid', url: '../../../../assets/bg.mp4'},
  {name: 'view', url: '../../../../assets/bg.mp4'},
  {name: 'show', url: '../../../../assets/bg.mp4'},
  // {name: 'live', url: '../../../../assets/bg.mp4'},
  // {name: 'video', url: '../../../../assets/bg.mp4'},
  // {name: 'audio', url: '../../../../assets/bg.mp4'},
  // {name: 'image', url: '../../../../assets/bg.mp4'},
  // {name: 'img', url: '../../../../assets/bg.mp4'},
  // {name: 'vid', url: '../../../../assets/bg.mp4'},
  // {name: 'view', url: '../../../../assets/bg.mp4'},
  // {name: 'show', url: '../../../../assets/bg.mp4'},
  // {name: 'live', url: '../../../../assets/bg.mp4'},
];

// const renderItem = ({item}) => (
//     <VideoCard name={item.name} />
//   );

const videos = [
  // {
  //   id: 1,
  //   url: 'https://media.istockphoto.com/videos/energetic-women-breakdancing-on-dance-floor-video-id1084619814',
  // },
  // {
  //   id: 2,
  //   url: 'https://media.istockphoto.com/videos/stacks-of-wood-logs-in-the-mountains-video-id1289220181',
  // },
  // {
  //   id: 3,
  //   url: 'https://media.istockphoto.com/videos/spring-landscape-at-sunset-video-id1283033291',
  // },
  // {
  //   id: 4,
  //   url: 'https://media.istockphoto.com/videos/wild-flowers-in-the-national-swamp-reserve-autumn-daytime-smooth-video-id499167048',
  // },
  // {
  //   id: 5,
  //   url: 'https://media.istockphoto.com/videos/dog-sits-and-neck-on-the-grass-video-id1146419990',
  // },
  //   {
  //     id: 6,
  //     url: 'https://www.istockphoto.com/video/white-artificial-electric-flowers-on-the-branches-of-christmas-trees-gm1292756752-387443537',
  //   },
  //   {
  //     id: 7,
  //     url: 'https://www.istockphoto.com/video/coral-and-underwater-marine-life-gm503475786-82874027',
  //   },
  //   {
  //     id: 8,
  //     url: 'https://www.istockphoto.com/video/neon-geometric-lines-background-3d-render-gm1189756760-336974649',
  //   },
  //   {
  //     id: 9,
  //     url: 'https://www.istockphoto.com/video/couple-at-movie-theatre-gm473019655-20822238',
  //   },
  //   {
  //     id: 10,
  //     url: 'https://www.istockphoto.com/video/energetic-women-breakdancing-on-dance-floor-gm1084619814-291007422',
  //   },
];

const windowHeight = Dimensions.get('window').height;

const Index = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={tw`px-4 w-full mt-2`}>
        <View
          style={[
            tw`w-full flex-row items-center`,
            {height: 45, backgroundColor: '#d3d3d3', borderRadius: 30},
          ]}>
          <Icon name="search1" size={20} color="white" style={tw`px-2`} />
          <TextInput
            placeholder="Search"
            style={tw`ml-1`}
            placeholderTextColor="white"
          />
        </View>
      </View>

      <View style={styles.container}>
        <FlatList
          numColumns={3}
          data={list}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.videoCard}
                onPress={() => navigation.navigate('Player', {item: item})}>
                {/* <VideoCard
                // url={item.url}
                /> */}
              </TouchableOpacity>
            );
          }}
          // keyExtractor={item => item.name}
          // numColumns={3}
          style={[tw`mt-2`, {height: windowHeight - 120}]}
        />
      </View>
      <Text style={{color: 'black'}}>Home Page</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // gap: '1.25rem',
  },

  videoCard: {
    width: '32.3%',
    height: 150,
    margin: 2,
  },
});
