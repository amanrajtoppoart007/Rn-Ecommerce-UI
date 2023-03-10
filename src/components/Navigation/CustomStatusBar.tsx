import React from 'react';
import {Platform, StatusBar} from 'react-native';
import Colors from '../../theme/Colors';

const CustomStatusBar = ({background}: {background?: string}) => {
  return (
    <StatusBar
      barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      backgroundColor={background ?? Colors.primary}
    />
  );
};

export default CustomStatusBar;
