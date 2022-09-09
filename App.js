import {View} from 'react-native';
import React from 'react';
import Navigator from './src/routes/index';
// import {TailwindProvider} from 'tailwindcss-react-native';
import ColorProvider from './src/store/slices/colorSlice';
import codePush from 'react-native-code-push';
import Toast from 'react-native-toast-message';
import {QueryClient, QueryClientProvider} from 'react-query';


let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: {appendReleaseDescription: true},
};

const queryClient = new QueryClient();

const App = () => {

  return (
    <ColorProvider>
      <View style={{flex: 1}}>
        <QueryClientProvider client={queryClient}>
          <Navigator />
          <Toast />
        </QueryClientProvider>
      </View>
    </ColorProvider>
  );
};

export default codePush(codePushOptions)(App);
