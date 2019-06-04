import DeviceInfo from "react-native-device-info";

const deviceBrand = DeviceInfo.getBrand();
const deviceCountry = DeviceInfo.getDeviceCountry(); // "US"
const firstInstallTime = DeviceInfo.getFirstInstallTime();
const referrer = DeviceInfo.getInstallReferrer();
// If the app was installed from https://play.google.com/store/apps/details?id=com.myapp&referrer=my_install_referrer
// the result will be "my_install_referrer"
const deviceMake = DeviceInfo.getModel(); //Pixel 3
const appVersionCode = DeviceInfo.getReadableVersion(); //1.0.0
const deviceOs = DeviceInfo.getSystemName(); //Android or iOS
const deviceOsVersion = DeviceInfo.getSystemVersion(); //"7.1.1"
const deviceId = DeviceInfo.getUniqueID();
const appVersion = DeviceInfo.getVersion();

// console.log("Device Complete Info>>>");
// console.log("Device Brand>", deviceBrand);
// console.log("Device Country>", deviceCountry);
// console.log("Device Make>", deviceMake);
// console.log("Device OS>", deviceOs);
// console.log("Device OS Version>", deviceOsVersion);
// console.log("Device ID>", deviceId);
// console.log("Device App version>", appVersion);

export default {
  deviceBrand: DeviceInfo.getBrand(),
  deviceCountry: DeviceInfo.getDeviceCountry(),
  firstInstallTime: DeviceInfo.getFirstInstallTime(),
  referrer: DeviceInfo.getInstallReferrer(),
  appVersionCode: DeviceInfo.getReadableVersion(),
  deviceOs: DeviceInfo.getSystemName(),
  deviceOsVersion: DeviceInfo.getSystemVersion(),
  deviceId: DeviceInfo.getUniqueID(),
  appVersion: DeviceInfo.getVersion(),
  deviceMake: DeviceInfo.getModel()
};
