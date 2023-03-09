import React from 'react';
import {StyleSheet, Text, TouchableOpacityProps} from 'react-native';
import {Surface, TouchableRipple} from 'react-native-paper';
import Colors from '../../theme/Colors';
import CommonStyle from '../../theme/CommonStyle';

interface Props extends TouchableOpacityProps {
  btnTextStyle: any;
  btnText: string;
  style: any;
  rippleColor: any;
  borderRadius: number;
  elevation?: 1 | 2 | 3 | 4 | 5 | undefined;
}
const RippleButton: React.FC<Props> = ({
  style,
  btnTextStyle,
  btnText,
  onPress,
  onLongPress,
  rippleColor,
  borderRadius,
  elevation,
}) => {
  const styles = StyleSheet.create({
    content: {
      width: '100%',
      height: '100%',
      ...CommonStyle.rowCenter,
      borderRadius: borderRadius,
    },
  });
  return (
    <Surface style={style} elevation={elevation ?? 5}>
      <TouchableRipple
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.content}
        rippleColor={rippleColor ?? Colors.rippleColor}>
        <Text style={btnTextStyle}>{btnText}</Text>
      </TouchableRipple>
    </Surface>
  );
};

export default RippleButton;
