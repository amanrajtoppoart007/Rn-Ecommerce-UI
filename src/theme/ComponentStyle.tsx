import {StyleSheet} from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';

const ComponentStyle = StyleSheet.create({
  inputStyle: {
    width: '100%',
    height: 45,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    borderRadius: 4,
    padding: 4,
  },
  inputTextStyle: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 16,
    color: Colors.darkText,
  },
  btnStyle: {
    width: '100%',
    height: 45,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    borderRadius: 4,
  },
  btnTextStyle: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 16,
    color: Colors.darkText,
  },
});

export default ComponentStyle;
