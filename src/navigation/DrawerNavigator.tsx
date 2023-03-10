import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import AppDrawer, {AppDrawerProps} from '../components/Navigation/AppDrawer';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import Listings from '../screens/Listings';
import UserListings from '../screens/UserListings';
import EditListing from '../screens/EditListing';
import ViewListing from '../screens/ViewListing';
export type RootDrawerParams = {
  AppNavs: undefined;
  Login: undefined;
  Register: undefined;
  Listings: undefined;
  UserListings: undefined;
  EditListing: undefined;
  ViewListing: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

const DrawerNavigator = () => {
  const drawerContent = (
    props: DrawerContentComponentProps & AppDrawerProps,
  ) => {
    return <AppDrawer {...props} />;
  };
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerType: 'front'}}
      drawerContent={drawerContent}>
      <Drawer.Screen name="AppNavs" component={StackNavigator} />
      <Drawer.Screen name={'Login'} component={Login} />
      <Drawer.Screen name={'Register'} component={Register} />
      <Drawer.Screen name={'Listings'} component={Listings} />
      <Drawer.Screen name={'UserListings'} component={UserListings} />
      <Drawer.Screen name={'EditListing'} component={EditListing} />
      <Drawer.Screen name={'ViewListing'} component={ViewListing} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
