import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonStyle from '../../theme/CommonStyle';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import RippleView from '../Button/RippleView';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AdButton = () => {
  return (
    <RippleView
      onPress={() => {}}
      style={styles.btnStyle}
      rippleColor={Colors.rippleColor}
      borderRadius={4}>
      <View style={CommonStyle.rowFlexStart}>
        <View style={styles.btnTextSection}>
          <Text style={styles.btnTextStyle}>Best Fashion Products</Text>
          <Text style={styles.btnHelperTextStyle}>Place to check your ads</Text>
        </View>
        <View style={styles.btnIconSection}>
          <View style={styles.squareBox}>
            <FontAwesome name={'arrow-right'} color={Colors.white} size={18} />
          </View>
        </View>
      </View>
    </RippleView>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',
    height: 60,
    borderRadius: 4,
    backgroundColor: Colors.secondary,
    ...CommonStyle.center,
  },
  btnTextSection: {
    width: '85%',
    ...CommonStyle.center,
  },
  btnIconSection: {
    width: '15%',
    ...CommonStyle.center,
  },
  btnTextStyle: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 16,
    color: Colors.white,
  },
  btnHelperTextStyle: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 14,
    color: Colors.white,
  },
  squareBox: {
    width: 35,
    height: 35,
    borderRadius: 4,
    ...CommonStyle.center,
    backgroundColor: '#52CDB9',
  },
});

export default AdButton;
