// @flow
import * as React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import {useColorScheme} from 'react-native';
import {useEffect, useState} from 'react';
import Colors from './theme/Colors';
import LocaleModal from './components/LocaleModal';

type Props = {};
const Main = (props: Props) => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState({
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...Colors,
    },
  });

  useEffect(() => {
    if (scheme === 'dark') {
      setTheme({
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          ...Colors,
        },
      });
    } else {
      setTheme({
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          ...Colors,
        },
      });
    }
  }, [scheme]);
  return (
    <React.Fragment>
      <NavigationContainer theme={theme}>
        <DrawerNavigator />
      </NavigationContainer>
      <LocaleModal />
    </React.Fragment>
  );
};

export default Main;
