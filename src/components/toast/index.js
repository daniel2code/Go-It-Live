import Toast from 'react-native-toast-message';

const showToast = (type, text) => {
    Toast.show({
      type: type,
      // text1: 'Hello',
      text2: text,
      visibilityTime: 6000,
    });
  };

  export { showToast }
