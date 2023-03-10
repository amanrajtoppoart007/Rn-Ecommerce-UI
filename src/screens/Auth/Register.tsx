import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import YupPassword from 'yup-password';
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
import FormError from '../../components/FormError';
YupPassword(Yup);

const Register = ({navigation}: {navigation: NavigationProp<any>}) => {
  const {translate} = useLanguage();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(translate('validation.name')),
    email: Yup.string()
      .required(translate('validation.email'))
      .email(translate('validation.email')),
    password: Yup.string()
      .required(translate('validation.passwordValidation.required'))
      .min(8, translate('validation.passwordValidation.min'))
      .minLowercase(1, translate('validation.passwordValidation.minLowercase'))
      .minUppercase(1, translate('validation.passwordValidation.minUppercase'))
      .minNumbers(1, translate('validation.passwordValidation.minNumbers'))
      .minSymbols(1, translate('validation.passwordValidation.minSymbols')),
    confirmPassword: Yup.string()
      .required(translate('validation.passwordValidation.required'))
      .oneOf(
        [Yup.ref('password')],
        translate('validation.passwordValidation.matchPassword'),
      ),
  });
  const {isSubmitting, errors, setFieldValue, values, handleSubmit} = useFormik(
    {
      onSubmit(params) {
        return onSubmit(params);
      },
      initialValues: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: validationSchema,
    },
  );

  const onSubmit = (params: any) => {
    console.log(params);
  };

  const setNameField = (value: string) => {
    setFieldValue('name', value);
  };
  const setEmailField = (value: string) => {
    setFieldValue('email', value);
  };
  const setPasswordField = (value: string) => {
    setFieldValue('password', value);
  };
  const setConfirmPasswordField = (value: string) => {
    setFieldValue('confirmPassword', value);
  };
  return (
    <SafeAreaView style={CommonStyle.container}>
      <CustomStatusBar />
      <View style={CommonStyle.wrapper}>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={CommonStyle.content}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 64}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
                    label={translate('name')}
                    style={styles.inputStyle}
                    labelStyle={styles.labelStyle}
                    value={values.name}
                    setValue={setNameField}
                    textStyle={ComponentStyle.inputTextStyle}
                    onFocus={() => {}}
                    placeholder={translate('name_input_helper')}
                  />
                  <FormError error={errors.name} />
                </View>
                <View style={CustomStyle.marginVertical(8)}>
                  <LabeledInput
                    label={translate('email')}
                    style={styles.inputStyle}
                    labelStyle={styles.labelStyle}
                    value={values.email}
                    setValue={setEmailField}
                    textStyle={ComponentStyle.inputTextStyle}
                    onFocus={() => {}}
                    placeholder={translate('email_input_helper')}
                  />
                  <FormError error={errors.email} />
                </View>
                <View style={CustomStyle.marginVertical(8)}>
                  <LabeledInput
                    label={translate('password')}
                    style={styles.inputStyle}
                    labelStyle={styles.labelStyle}
                    value={values.password}
                    setValue={setPasswordField}
                    textStyle={ComponentStyle.inputTextStyle}
                    onFocus={() => {}}
                    placeholder={translate('password_input_helper')}
                    secureTextEntry={true}
                  />
                  <FormError error={errors.password} />
                </View>
                <View style={CustomStyle.marginVertical(8)}>
                  <LabeledInput
                    label={translate('confirm_password')}
                    style={styles.inputStyle}
                    labelStyle={styles.labelStyle}
                    value={values.confirmPassword}
                    setValue={setConfirmPasswordField}
                    textStyle={ComponentStyle.inputTextStyle}
                    onFocus={() => {}}
                    placeholder={translate('confirm_password_input_helper')}
                    secureTextEntry={true}
                  />
                  <FormError error={errors.confirmPassword} />
                </View>
                <View style={CustomStyle.marginVertical(8)}>
                  <RippleButton
                    onPress={() => handleSubmit()}
                    btnTextStyle={styles.btnTextStyle}
                    btnText={translate('register')}
                    style={styles.btnStyle}
                    rippleColor={Colors.rippleColor}
                    borderRadius={4}
                    disabled={isSubmitting}
                  />
                </View>
                <View style={styles.center}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.accountText}>
                      <Text>{translate('login_helper_text')}&nbsp;</Text>
                      <Text style={styles.strongText}>
                        {translate('login_helper_title')}
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
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

export default Register;
