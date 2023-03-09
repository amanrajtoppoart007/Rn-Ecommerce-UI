import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

export type StackNavigatorParams = {
  MainTabs: undefined;
};

const Stack = createStackNavigator<StackNavigatorParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'MainTabs'} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
