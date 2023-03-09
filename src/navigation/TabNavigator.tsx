import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Publish from '../screens/Publish';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import TabBar from '../components/Navigation/TabBar';

type TabParamList = {
  Home: undefined;
  Categories: undefined;
  Publish: undefined;
  Search: undefined;
  Profile: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Home'}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Categories'} component={Categories} />
      <Tab.Screen name={'Publish'} component={Publish} />
      <Tab.Screen name={'Search'} component={Search} />
      <Tab.Screen name={'Profile'} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
