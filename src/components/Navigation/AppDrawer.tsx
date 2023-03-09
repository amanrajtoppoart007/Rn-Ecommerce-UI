import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {DrawerContentScrollView} from '@react-navigation/drawer';
import {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';
import CommonStyle from '../../theme/CommonStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../theme/Colors';
export interface AppDrawerProps extends DrawerContentComponentProps {
  navigation: any;
}
import {DrawerActions} from '@react-navigation/native';
import Fonts from '../../theme/Fonts';
import AddIcon from '../Svg/Drawer/AddIcon';
import DotMenu from '../Svg/Drawer/DotMenu';
import LogoutIcon from '../Svg/Drawer/LogoutIcon';
import ProfileIcon from '../Svg/Drawer/ProfileIcon';
import {TouchableRipple} from 'react-native-paper';
import useLanguage from '../../hooks/useLanguage';

const Icon = ({menu}: {menu: string}) => {
  switch (menu) {
    case 'Publish':
      return <AddIcon />;
    case 'Profile':
      return <ProfileIcon />;
    case 'UserListings':
      return <DotMenu />;
    case 'Logout':
      return <LogoutIcon />;
    default:
      return null;
  }
};
const AppDrawer = (props: AppDrawerProps) => {
  const {navigation} = props;
  const {translate} = useLanguage();
  const menus = [
    {
      title: translate('publish_ad_menu'),
      route: 'Publish',
      onMenuPress: () => navigation.navigate('Publish'),
    },
    {
      title: translate('profile_menu'),
      route: 'Profile',
      onMenuPress: () => navigation.navigate('Profile'),
    },
    {
      title: translate('user_ads_menu'),
      route: 'UserListings',
      onMenuPress: () => navigation.navigate('UserListings'),
    },
    {
      title: translate('logout'),
      route: 'Logout',
      onMenuPress: () => navigation.navigate('Login'),
    },
  ];

  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.wrapper}>
        <DrawerContentScrollView style={styles.content}>
          <View style={styles.btnSection}>
            <Ionicons
              onPress={() => navigation.dispatch(DrawerActions.closeDrawer)}
              name="close-circle-outline"
              color={Colors.secondary}
              size={30}
            />
          </View>
          <View style={styles.profileSection}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>I</Text>
            </View>
            <Text style={styles.name}>Ivior Shop</Text>
          </View>
          <View style={styles.menuSection}>
            {menus.map((item: any, index: number) => {
              return (
                <TouchableRipple
                  onPress={item.onMenuPress}
                  style={styles.menuItem}
                  key={index?.toString()}>
                  <View style={CommonStyle.rowFlexStart}>
                    <View style={styles.iconSection}>
                      <Icon menu={item.route} />
                    </View>
                    <View style={styles.titleSection}>
                      <Text style={styles.menuTitle}>{item.title}</Text>
                    </View>
                  </View>
                </TouchableRipple>
              );
            })}
          </View>
        </DrawerContentScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    ...CommonStyle.content,
    ...CommonStyle.defaultWrapper,
    backgroundColor: Colors.white,
  },
  btnSection: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  profileSection: {
    minHeight: 100,
    ...CommonStyle.center,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.secondary,
    paddingVertical: 12,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.secondary,
    ...CommonStyle.center,
  },
  circleText: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 60,
    color: Colors.white,
  },
  name: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 22,
    color: Colors.secondary,
  },
  menuSection: {
    marginTop: 30,
    padding: 12,
  },
  menuItem: {
    height: 45,
    ...CommonStyle.center,
  },
  menuTitle: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 16,
    color: Colors.darkText,
  },
  iconSection: {
    width: '30%',
    ...CommonStyle.center,
  },
  titleSection: {
    width: '70%',
  },
});

export default AppDrawer;
