import React from 'react';
import {StyleSheet, TouchableOpacityProps} from 'react-native';
import {Surface, TouchableRipple} from 'react-native-paper';
import Colors from '../../theme/Colors';
import CommonStyle from '../../theme/CommonStyle';

interface Props extends TouchableOpacityProps {
  style: any;
  rippleColor: any;
  borderRadius: number;
  elevation?: 1 | 2 | 3 | 4 | 5 | undefined;
  children: React.ReactNode;
}
const RippleView: React.FC<Props> = ({
  style,
  onPress,
  onLongPress,
  rippleColor,
  borderRadius,
  elevation,
  children,
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
    <Surface style={style} elevation={elevation ?? 2}>
      <TouchableRipple
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.content}
        rippleColor={rippleColor ?? Colors.rippleColor}>
        {children}
      </TouchableRipple>
    </Surface>
  );
};

export default RippleView;
