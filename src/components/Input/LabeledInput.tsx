import React from 'react';
import {Text, TextInput} from 'react-native';

type inputProps = {
  label: string;
  style: any;
  labelStyle: any;
  value: string | undefined;
  setValue: Function;
  textStyle: any;
  onFocus?: Function;
  placeholder?: string;
  secureTextEntry?: boolean;
};
const LabeledInput = ({
  label,
  labelStyle,
  style,
  textStyle,
  value,
  setValue,
  placeholder,
  secureTextEntry,
}: inputProps) => {
  return (
    <React.Fragment>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={[style, textStyle]}
        value={value}
        onChangeText={text => setValue(text)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry ?? false}
      />
    </React.Fragment>
  );
};

export default LabeledInput;
