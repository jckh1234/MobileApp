import { createRouter } from '@expo/ex-navigation';
import HomeScreen from './Components/HomeScreen';
import Scanner from './Components/Scanner';
import DeviceToken from './Components/DeviceToken';

export default createRouter(() => ({
  	home: () => HomeScreen,
  	scanner: () => Scanner,
  	token: () => DeviceToken,
  	lastlogin: () => LastLoginDetails,
}));
