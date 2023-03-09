import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../../theme/Colors';
import MenuIcon from '../Svg/MenuIcon';
import {Surface} from 'react-native-paper';
import CommonStyle from '../../theme/CommonStyle';
import {
  NavigationProp,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {toggleLocaleModal} from '../../state/reducers/locale.slice';
import {useDispatch} from 'react-redux';
import GlobeIcon from '../Svg/Header/GlobeIcon';

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <Surface elevation={2} style={styles.card}>
      <View style={styles.menuSection}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
          <MenuIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.logoSection}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo/logo.png')}
        />
      </View>
      <View style={styles.menuSection}>
        <TouchableOpacity onPress={() => dispatch(toggleLocaleModal(true))}>
          <GlobeIcon />
        </TouchableOpacity>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 60,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 45,
    resizeMode: 'contain',
  },
  menuSection: {
    width: '15%',
    ...CommonStyle.center,
  },
  logoSection: {
    width: '70%',
    ...CommonStyle.center,
  },
});

export default Header;
