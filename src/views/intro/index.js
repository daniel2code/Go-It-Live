import {StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { primaryColor } from "../../helper/theme"

const Index = ({ navigation }) => {

  useEffect(()=>{
     setTimeout(()=>{
      navigation.navigate("onboard")
     }, 6000)


  }, [])

  return (
    <Animatable.View style={styles.container}>
      <View />

      <View style={styles.textBox}>
        <Animatable.View
          animation="bounceInLeft"
          iterationCount={1}
          duration={3600}
          delay={1000}
          style={styles.partOne}>
          <View style={styles.line} />
          <Text style={styles.introText1}>Go It Live </Text>
          <View style={styles.line} />
        </Animatable.View>

        <Animatable.Text
          animation="bounceInRight"
          iterationCount={1}
          duration={3600}
          delay={1000}
          style={styles.introText2}>
          Make Money
        </Animatable.Text>
      </View>

      <Animatable.Image
        source={require('../../assets/logo1.png')}
        style={styles.logo}
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"></Animatable.Image>
    </Animatable.View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: 110,
    height: 110,
    backgroundColor: "white",
    borderRadius: 60,
  },

  textBox: {
    alignItems: 'center',
  },

  partOne: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  line: {
    backgroundColor: 'white',
    width: 45,
    height: 2,
  },

  introText1: {
    fontSize: 27,
    paddingHorizontal: 3,
    fontWeight: '700',
    color: "white",
    textTransform: "uppercase",
    fontStyle: 'italic',
  },

  introText2: {
    fontSize: 37,
    paddingHorizontal: 5,
    fontWeight: '700',
    fontStyle: 'italic',
    color: "white",
    textTransform: "uppercase",
  },
});
