import axios from 'axios';
import * as Keychain from 'react-native-keychain';

export const instance = axios.create({
  // baseURL: 'https://go-it-live.herokuapp.com/api/v1/user',
  baseURL: 'http://192.168.176.94:4000/api/v1/user',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async config => {
    // await Keychain.resetGenericPassword();
    const credentials = await Keychain.getGenericPassword();

    console.log('this is request token', credentials.password);

    //   console.log(token)
    if (credentials.password) {
      config.headers['Authorization'] = `Bearer ${credentials.password}`;
      console.log(`Authorization: Bearer ${credentials.password}`);
    } else {
      console.log("didn't fetch your password");
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);
