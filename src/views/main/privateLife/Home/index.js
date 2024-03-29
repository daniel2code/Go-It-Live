import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import tw from 'tailwind-react-native-classnames';
import PostViewer from '../../../../components/postView/index';
import {SlideModal} from 'react-native-slide-modal';
import Toast from 'react-native-toast-message';
import Modal from '../../../../components/modal/index';
import ReportModalContent from '../modals/reportModal';
import MenuModalContent from '../modals/menuModal';
import CallModalContent from '../modals/callModal';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  fetchUser,
  getPrivateVideos,
} from '../../../../api/services/userServices';
import {useQuery} from 'react-query';

const Index = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [reportModal, setReportModal] = useState(false);
  const [callModal, setCallModal] = useState(false);
  // const {data, isLoading} = useQuery('User', fetchUser);
  const {data, isLoading} = useQuery('PrivateVideos', getPrivateVideos);

  console.log('===============+++++------', data?.data?.result);

  // useEffect(() => {
  //   const checkUser = () => {
  //     if (data?.data?.user?.private_life === false) {
  //       navigation.navigate('terms');
  //     } else {
  //       return null;
  //     }
  //   };

  //   checkUser();
  // }, [data]);

  const handleOpenModal = () => {
    setModalVisible(!modalVisible);
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'You successfully blocked user',
      position: 'bottom',
    });

    handleOpenModal();
  };

  const handleAction = () => {
    return Alert.alert(
      'Block User',
      'Are you sure you want to block user?',
      [
        {
          text: 'Cancel',
          onPress: () => handleOpenModal(),
          style: 'cancel',
        },

        {text: 'OK', onPress: () => showToast()},
      ],
      {cancelable: false},
    );
  };

  const handleOpenReportModal = () => {
    setModalVisible(false);
    setReportModal(!reportModal);
  };

  const handleReportAction = () => {
    handleOpenReportModal();
    return Alert.alert(
      'Thanks for letting us know',
      'Your request is been processed',
      [{text: 'OK', onPress: () => null}],
      {cancelable: false},
    );
  };

  const handleCallModal = () => {
    handleOpenModal();
    setCallModal(!callModal);
  };

  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{flex: 1}}>
      <Spinner
        visible={
          isLoading
          // ||
          // loading
        }
        textContent={'Loading...'}
        textStyle={{color: 'white'}}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
      <FlatList
        numColumns={1}
        data={data?.data?.result}
        renderItem={({item}) => {

          return (
            <View style={[tw`w-full mt-2`]}>
              <PostViewer
                navigation={navigation}
                openModal={handleOpenModal}
                video={item?.video}
              />
              {/* <Text style={{color: "black"}} >testing=======</Text> */}
            </View>
          );
        }}
        style={[tw`mt-0`, {height: windowHeight - 120, width: '100%'}]}
      />

      <Modal
        open={modalVisible}
        containerStyle={{paddingBottom: 75}}
        close={handleOpenModal}>
        <MenuModalContent
          handleAction={handleAction}
          reportModal={handleOpenReportModal}
          callModal={handleCallModal}
        />
      </Modal>

      {/* Report Modal */}
      <Modal
        open={reportModal}
        containerStyle={{paddingBottom: 75}}
        close={handleOpenReportModal}>
        <ReportModalContent action={handleReportAction} />
      </Modal>

      <Modal
        open={callModal}
        containerStyle={{paddingBottom: 75}}
        close={handleCallModal}>
        <CallModalContent navigation={navigation} />
      </Modal>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
