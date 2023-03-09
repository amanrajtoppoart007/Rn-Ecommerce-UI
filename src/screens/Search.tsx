import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import CommonStyle from '../theme/CommonStyle';
import CustomStatusBar from '../components/Navigation/CustomStatusBar';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';
import RippleButton from '../components/Button/RippleButton';
import Input from '../components/Input/Input';
import CustomStyle from '../theme/CustomStyle';
import {NavigationProp} from '@react-navigation/native';
import Header from '../components/Navigation/Header';
import useLanguage from '../hooks/useLanguage';

const Search = ({navigation}: {navigation: NavigationProp<any>}) => {
  const {translate} = useLanguage();
  const [search, setSearch] = useState('');
  const onSearch = () => {
    navigation.navigate('Listings', {
      title: translate('search_results'),
    });
  };
  return (
    <SafeAreaView style={CommonStyle.container}>
      <CustomStatusBar />
      <View style={CommonStyle.wrapper}>
        <Header />
        <View style={styles.content}>
          <View style={styles.cardRow}>
            <View style={CustomStyle.width('65%')}>
              <Input
                style={styles.inputStyle}
                value={search}
                setValue={setSearch}
                textStyle={styles.inputTextStyle}
                placeholder={translate('search_label')}
              />
            </View>
            <View style={styles.btnSection}>
              <RippleButton
                onPress={onSearch}
                btnTextStyle={styles.btnTextStyle}
                btnText={translate('search')}
                style={styles.btnStyle}
                rippleColor={Colors.rippleColor}
                borderRadius={4}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    ...CommonStyle.content,
    ...CommonStyle.defaultWrapper,
  },
  card: {
    width: '100%',
    marginTop: 40,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btnSection: {
    width: '35%',
    paddingHorizontal: 10,
  },
  btnStyle: {
    width: '100%',
    height: 45,
    backgroundColor: Colors.primary,
    borderRadius: 4,
    ...CommonStyle.center,
  },
  btnTextStyle: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 16,
    color: Colors.white,
  },
  inputStyle: {
    width: '100%',
    height: 45,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.white,
    borderRadius: 4,
    padding: 4,
  },
  inputTextStyle: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 15,
    color: Colors.darkText,
  },
});

export default Search;
