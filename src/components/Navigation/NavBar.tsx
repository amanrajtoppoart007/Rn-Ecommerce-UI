import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../theme/Colors';
import {TouchableRipple, Surface} from 'react-native-paper';
import CommonStyle from '../../theme/CommonStyle';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Fonts from '../../theme/Fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NavBar = ({title}: {title: string}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <Surface elevation={2} style={styles.card}>
      <View style={styles.menuSection}>
        <TouchableRipple onPress={() => navigation.goBack()}>
          <Ionicons name={'arrow-back'} color={Colors.darkText} size={26} />
        </TouchableRipple>
      </View>
      <View style={styles.titleSection}>
        <Text style={styles.title}>{title}</Text>
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
  title: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 16,
    color: Colors.darkText,
    left: -30,
  },
  menuSection: {
    width: '15%',
    ...CommonStyle.center,
  },
  titleSection: {
    width: '85%',
    ...CommonStyle.center,
  },
});

export default NavBar;
