import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import Video from 'react-native-video';
import VideoCard from '../../../../components/videoCard/index';

const list = [
  {name: 'video'},
  {name: 'audio'},
  {name: 'image'},
  {name: 'img'},
  {name: 'vid'},
  {name: 'view'},
  {name: 'show'},
  {name: 'live'},
];

// const renderItem = ({item}) => (
//     <VideoCard name={item.name} />
//   );

const videos = [
  {
    id: 1,
    url: 'https://media.istockphoto.com/videos/energetic-women-breakdancing-on-dance-floor-video-id1084619814',
  },
  {
    id: 2,
    url: 'https://media.istockphoto.com/videos/stacks-of-wood-logs-in-the-mountains-video-id1289220181',
  },
  {
    id: 3,
    url: 'https://media.istockphoto.com/videos/spring-landscape-at-sunset-video-id1283033291',
  },
  {
    id: 4,
    url: 'https://media.istockphoto.com/videos/wild-flowers-in-the-national-swamp-reserve-autumn-daytime-smooth-video-id499167048',
  },
  {
    id: 5,
    url: 'https://media.istockphoto.com/videos/dog-sits-and-neck-on-the-grass-video-id1146419990',
  },
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

const Index = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container} >
        <FlatList
          data={videos}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.videoCard} onPress={()=>navigation.navigate('Player', {item: item})} >
                <VideoCard url={item.url} />
              </TouchableOpacity>
            );
          }}
          // keyExtractor={item => item.name}
          // numColumns={3}
        />
      </View>
      <Text style={{color: 'black'}}>Home Page</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '1.25rem',
  },

  videoCard: {
    width: '32.3%',
    height: 150,
    margin: 2,
  },
});
