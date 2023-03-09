import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  btnTextStyle: any;
  btnText: string;
  style: any;
}
const Button: React.FC<Props> = ({style, btnTextStyle, btnText, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={btnTextStyle}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default Button;
