import {StyleSheet, TextStyle} from 'react-native';

const CustomStyle = {
  width: (wp: string | number) => {
    return StyleSheet.create({
      width: {
        width: wp,
      },
    }).width;
  },
  height: (hp: string | number) => {
    return StyleSheet.create({
      height: {
        height: hp,
      },
    }).height;
  },
  padding: (value: number) => {
    return StyleSheet.create({
      padding: {
        padding: value,
      },
    }).padding;
  },
  backgroundColor: (color: string) => {
    return StyleSheet.create({
      backgroundColor: {
        backgroundColor: color,
      },
    }).backgroundColor;
  },
  color: (color: string): TextStyle => {
    return StyleSheet.create({
      color: {
        color: color,
      },
    }).color;
  },
  margin: (value: number) => {
    return StyleSheet.create({
      margin: {
        margin: value,
      },
    }).margin;
  },
  marginVertical: (value: number) => {
    return StyleSheet.create({
      marginVertical: {
        marginVertical: value,
      },
    }).marginVertical;
  },
  justifyContent: (
    justify:
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
      | undefined,
  ): TextStyle => {
    return StyleSheet.create({
      justifyContent: {
        justifyContent: justify,
      },
    }).justifyContent;
  },
};

export default CustomStyle;
