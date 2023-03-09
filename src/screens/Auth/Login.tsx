import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import CommonStyle from '../../theme/CommonStyle';
import Colors from '../../theme/Colors';
import ComponentStyle from '../../theme/ComponentStyle';
import LabeledInput from '../../components/Input/LabeledInput';
import CustomStyle from '../../theme/CustomStyle';
import RippleButton from '../../components/Button/RippleButton';
import {NavigationProp} from '@react-navigation/native';
import CustomStatusBar from '../../components/Navigation/CustomStatusBar';
import Header from '../../components/Navigation/Header';
import useLanguage from '../../hooks/useLanguage';

const Login = ({navigation}: {navigation: NavigationProp<any>}) => {
  const {translate} = useLanguage();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <SafeAreaView style={CommonStyle.container}>
      <CustomStatusBar />
      <View style={CommonStyle.wrapper}>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={CommonStyle.content}>
          <View style={styles.centeredView}>
            <View style={styles.card}>
              <View style={styles.logSection}>
                <Image
                  style={styles.logo}
                  source={require('../../assets/logo/logo-mini.png')}
                />
              </View>
              <View style={CustomStyle.marginVertical(8)}>
                <LabeledInput
                  label={translate('email')}
                  style={styles.inputStyle}
                  labelStyle={styles.labelStyle}
                  value={email}
                  setValue={setEmail}
                  textStyle={ComponentStyle.inputTextStyle}
                  onFocus={() => {}}
                  placeholder={translate('email_input_helper')}
                />
              </View>
              <View style={CustomStyle.marginVertical(8)}>
                <LabeledInput
                  label={translate('password')}
                  style={styles.inputStyle}
                  labelStyle={styles.labelStyle}
                  value={password}
                  setValue={setPassword}
                  textStyle={ComponentStyle.inputTextStyle}
                  onFocus={() => {}}
                  placeholder={translate('password_input_helper')}
                />
              </View>
              <View style={CustomStyle.marginVertical(8)}>
                <RippleButton
                  onPress={() => navigation.navigate('MainTabs')}
                  btnTextStyle={styles.btnTextStyle}
                  btnText={translate('login')}
                  style={styles.btnStyle}
                  rippleColor={Colors.rippleColor}
                  borderRadius={4}
                />
              </View>
              <View style={CustomStyle.marginVertical(8)}>
                <Text style={styles.helperText}>
                  {translate('forgot_password_helper')}?
                </Text>
              </View>
              <View style={styles.center}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.accountText}>
                    <Text>{translate('create_account_text')}&nbsp;</Text>
                    <Text style={styles.strongText}>
                      {translate('create_account_title')}
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    height: '100%',
    ...CommonStyle.center,
  },
  logSection: {
    marginTop: 30,
    ...CommonStyle.center,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  card: {
    width: '90%',
    height: '100%',
    marginTop: 30,
    padding: 12,
  },
  inputStyle: {
    ...ComponentStyle.inputStyle,
    backgroundColor: Colors.white,
    height: 50,
  },
  labelStyle: {
    fontSize: 16,
    color: Colors.darkText,
    marginVertical: 8,
  },
  btnStyle: {
    ...ComponentStyle.btnStyle,
    backgroundColor: Colors.primary,
  },
  btnTextStyle: {
    ...ComponentStyle.btnTextStyle,
    color: Colors.white,
  },
  helperText: {
    ...ComponentStyle.btnTextStyle,
    color: Colors.primary,
    alignSelf: 'flex-end',
  },
  center: {
    ...CustomStyle.marginVertical(8),
    ...CommonStyle.center,
  },
  accountText: {
    fontSize: 16,
    color: Colors.primary,
  },
  strongText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});

export default Login;
