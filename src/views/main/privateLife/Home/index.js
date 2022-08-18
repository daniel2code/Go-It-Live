import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import tw from 'tailwind-react-native-classnames';
import PostViewer from '../../../../components/postView/index';
import {SlideModal} from 'react-native-slide-modal';
import Toast from 'react-native-toast-message';
import Modal from '../../../../components/modal/index';
import ReportModalContent from '../modals/reportModal';
import MenuModalContent from '../modals/menuModal';
import CallModalContent from '../modals/callModal';

const Index = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [reportModal, setReportModal] = useState(false);
  const [callModal, setCallModal] = useState(false);

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

  const List = [
    {name: 'video', url: '../../../../assets/bg.mp4'},
    {name: 'audio', url: '../../../../assets/bg.mp4'},
    {name: 'image', url: '../../../../assets/bg.mp4'},
    {name: 'img', url: '../../../../assets/bg.mp4'},
    {name: 'vid', url: '../../../../assets/bg.mp4'},
    {name: 'view', url: '../../../../assets/bg.mp4'},
    {name: 'show', url: '../../../../assets/bg.mp4'},
    {name: 'live', url: '../../../../assets/bg.mp4'},
  ];

  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{flex: 1}}>
      <FlatList
        numColumns={1}
        data={List}
        renderItem={({item}) => {
          return (
            <View style={[tw`w-full mt-2`]}>
              <PostViewer navigation={navigation} openModal={handleOpenModal} />
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
