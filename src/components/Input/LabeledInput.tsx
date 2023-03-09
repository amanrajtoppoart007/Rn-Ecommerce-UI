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
};
const LabeledInput = ({
  label,
  labelStyle,
  style,
  textStyle,
  value,
  setValue,
  placeholder,
}: inputProps) => {
  return (
    <React.Fragment>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={[style, textStyle]}
        value={value}
        onChangeText={text => setValue(text)}
        placeholder={placeholder}
      />
    </React.Fragment>
  );
};

export default LabeledInput;
