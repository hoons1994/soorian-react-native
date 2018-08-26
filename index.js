/** @format */

import {AppRegistry} from 'react-native';
<<<<<<< HEAD
// import Login from './Login';
import App from './App';
=======
import Login from './Login';
>>>>>>> 07bfc4df99bfa833e43f2faacebf16d2cb0a6f5f
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Login);
