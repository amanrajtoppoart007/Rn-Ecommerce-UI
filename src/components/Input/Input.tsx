import React from 'react';
import {TextInput} from 'react-native';

type inputProps = {
  style: any;
  value: string | undefined;
  setValue: Function;
  textStyle: any;
  onFocus?: Function;
  placeholder: string;
};
const Input = ({
  style,
  textStyle,
  value,
  setValue,
  placeholder,
}: inputProps) => {
  return (
    <TextInput
      style={[style, textStyle]}
      value={value}
      onChangeText={text => setValue(text)}
      placeholder={placeholder}
    />
  );
};

export default Input;
