import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import {ImageSlider} from 'react-native-image-slider-banner';
// import Video from 'react-native-video';

const Index = ({children, navigation, hideIcon}) => {

  const height = Dimensions.get('window').height;

  return (
    <>
      {/* <Video
        source={require('../../assets/bg.mp4')}
        resizeMode="cover"
        repeat={true}
        style={styles.bgImg}
      /> */}
      {/* <SliderBox images={images} /> */}
      <ImageSlider
        data={[
          {
            img: 'https://images.unsplash.com/photo-1575467678950-0c09aad418af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          },
          {
            img: 'https://images.unsplash.com/photo-1568782517100-09bf22d88c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          },
          {
            img: 'https://images.unsplash.com/photo-1583994009785-37ec30bf9342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          },
        ]}
        autoPlay={true}
        onItemChanged={item => console.log('item', item)}
        closeIconColor="#fff"
        caroselImageStyle={{height: height}}
        timer={6000}
      />

      <View
        style={[
          tw`p-4 flex-1 absolute w-full h-full justify-between`,
          styles.bg,
        ]}>
        <View style={tw`w-full`}>
          <View
            style={tw`${
              !hideIcon ? 'justify-between' : 'justify-end'
            } flex-row`}>
            {!hideIcon ? (
              <Icon
                name="arrow-back"
                color="#fff"
                size={25}
                onPress={() => navigation && navigation.goBack()}
              />
            ) : (
              ''
            )}
            <Icon1 name="question" color="#fff" size={27}></Icon1>
          </View>
          <View style={{height: '97%'}}>{children}</View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },

  bgImg: {
    width: '100%',
    height: '100%',
  },
});

export default Index;
