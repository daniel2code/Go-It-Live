import DeviceInfo from 'react-native-device-info';
import {getDeviceName, getManufacturer} from 'react-native-device-info';

const deviceInfo = {
  device_id: DeviceInfo.getDeviceId(),

  device_name: "Iphone",
  // getDeviceName().then(deviceName => {
  //    console.log(deviceName)
  //   return deviceName;
  // }),
  device_agent: "Apple Inc",
  // getManufacturer().then((manufacturer) => {
  //   console.log(manufacturer)
  //   return manufacturer;
  // }),
};

export {deviceInfo};
