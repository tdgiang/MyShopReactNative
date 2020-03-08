/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import app from './src/components/app';
import change from './src/components/ChangeInfo/ChangeInfo';
import item from './src/components/Main/Shop/Home/item';
AppRegistry.registerComponent(appName, () => app);
