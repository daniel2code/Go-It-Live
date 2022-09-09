import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

import Wrapper from '../../../components/onboardWrapper/';
import {BackPressHandler} from '../../../helper/backHandler';
import tw from 'tailwind-react-native-classnames';
import {showToast} from '../../../components/toast/index';
import {primaryColor} from '../../../helper/theme';
import Button from '../../../components/button/index';
import Clipboard from '@react-native-clipboard/clipboard';
import Spinner from 'react-native-loading-spinner-overlay';
import {fetchUser} from '../../../api/services/userServices';
import {useQuery} from 'react-query';

const Index = ({navigation}) => {
  const {data, isLoading, isError, error} = useQuery('User', fetchUser);

  useEffect(() => {
    BackPressHandler();
  }, []);

  const copyToClipboard = () => {
    Clipboard.setString('256473890298');
    showToast('success', 'Text copied to clipboard');
  };

  return (
    <Wrapper hideIcon={true}>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={{color: 'white'}}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
      <View style={[tw` justify-between h-full`]}>
        <View>
          <Text style={tw`text-3xl font-bold mt-14 text-white`}>
            Serial Code
          </Text>

          <Text style={tw` text-white my-3`}>
            Your serial code helps you use your account in another device, copy
            it and keep it safe.
          </Text>
          <Text style={tw`text-white`}>
            Do not share this code with anyone and no one from Go-It-Live will
            ask you.
          </Text>

          <View
            style={[
              tw`justify-between items-center flex-row relative mt-6 pl-3`,
              styles.box,
            ]}>
            <Text style={tw`text-black`}>{data?.data?.user?.backup_words}</Text>
            <TouchableOpacity style={styles.clipBtn} onPress={copyToClipboard}>
              <Text style={tw`text-white font-bold`}>Copy </Text>
            </TouchableOpacity>
          </View>

          <Button
            text="Proceed to app"
            btnStyle={styles.btn}
            onPress={() => navigation.navigate('dashboard')}
          />
        </View>

        <View style={tw`items-center flex-row`}></View>
      </View>
    </Wrapper>
  );
};

export default Index;

const styles = StyleSheet.create({
  box: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
  },

  btn: {
    backgroundColor: primaryColor,
    marginTop: 20,
    borderRadius: 50,
  },

  clipBtn: {
    backgroundColor: primaryColor,
    height: 45,
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 2,
  },
});
