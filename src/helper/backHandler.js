import {BackHandler} from 'react-native';

export const BackPressHandler = () => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    return true;
  });
};
