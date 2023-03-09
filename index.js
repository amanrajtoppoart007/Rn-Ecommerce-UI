/**
 * @format
 */
import React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {Provider as PaperThemeProvider} from 'react-native-paper';

import App from './App';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <PaperThemeProvider>
      <App />
    </PaperThemeProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
