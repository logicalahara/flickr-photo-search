import React from 'react';
import {AppRegistry} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';

const Root = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
