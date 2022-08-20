import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import { editable } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';

const Input = ({
  placeholder,
  onChange,
  value,
  style,
  icon1,
  icon2,
  secureText,
  keyboardType,
  editable,
}) => {
  return (
    <View style={[styles.inputBox, style]}>
      <View style={icon1 && {width: 30}}>{icon1}</View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="white"
        secureTextEntry={false || secureText}
        onChangeText={onChange}
        keyboardType={keyboardType || "default"}
        value={value}
        style={[styles.input, icon1 ? {width: '85%'} : {width: '92%'}]}
        editable={editable}
      />
      <View>{icon2}</View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderRadius: 50,
    paddingHorizontal: 13,
    backgroundColor: "'rgba(255, 255, 255, 0.3)",
    marginTop: 17,
  },
  
  input: {
    height: 40,
    color: "#fff",
    fontSize: 14,
  },
});