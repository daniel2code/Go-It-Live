import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';

const MainButton = ({btnStyle, text, onPress}) => {
  return (
    <TouchableOpacity style={[styles.MainButtonStyle, btnStyle]} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  MainButtonStyle: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    // backgroundColor: "#03dac5",
    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  
  btnText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "600",
  },
});