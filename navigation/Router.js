import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PhotosScreen from '../screens/PhotosScreen';
import UploadScreen from '../screens/UploadScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  links: () => LinksScreen,
  settings: () => SettingsScreen,
  photos: () => PhotosScreen,
  upload: () => UploadScreen,
  rootNavigation: () => RootNavigation,
}));
