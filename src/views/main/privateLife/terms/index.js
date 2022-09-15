import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import tw from 'tailwind-react-native-classnames';
import Button from '../../../../components/button/index';
import {primaryColor} from '../../../../helper/theme';
import {BackPressHandler} from '../../../../helper/backHandler';

const Index = ({navigation}) => {
  useEffect(() => {
    BackPressHandler();
  }, []);

  return (
    <View style={[tw`flex-1 bg-white px-4 pt-8`]}>
      <Text style={[tw`text-black text-3xl font-bold`]}>Terms of use</Text>
      <View>
        <Text style={[tw`text-black`]}>+18 use</Text>
      </View>
      <Button
        text="Agree and Continue"
        btnStyle={styles.btn}
        onPress={() => navigation.navigate('upload')}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: primaryColor,
    marginTop: 70,
    borderRadius: 50,
  },
});
