import React from 'react';
import {StatusBar} from 'react-native';
import Colors from '../../theme/Colors';

const CustomStatusBar = ({background}: {background?: string}) => {
  return (
    <StatusBar
      barStyle={'light-content'}
      backgroundColor={background ?? Colors.primary}
    />
  );
};

export default CustomStatusBar;
