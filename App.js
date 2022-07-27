import {View, Text} from 'react-native';
import React from 'react';
import Navigator from './src/routes/index';
// import {TailwindProvider} from 'tailwindcss-react-native';
import ColorProvider from './src/store/slices/colorSlice';
import codePush from 'react-native-code-push';

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: {appendReleaseDescription: true},
};

const App = () => {
  return (
    <ColorProvider>
      <View style={{flex: 1}}>
        <Navigator />
      </View>
    </ColorProvider>
  );
};

export default codePush(codePushOptions)(App);
