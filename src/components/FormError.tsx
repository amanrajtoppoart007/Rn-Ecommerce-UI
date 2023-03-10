import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import CustomStyle from '../theme/CustomStyle';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';

const FormError = ({error}: {error: string | undefined}) => {
  return (
    <View style={CustomStyle.marginVertical(8)}>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 11,
    color: Colors.red,
  },
});

export default FormError;
