import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import CommonStyle from '../theme/CommonStyle';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';
import DropDownPicker from '../components/DropDownPicker';
import LabeledInput from '../components/Input/LabeledInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RippleButton from '../components/Button/RippleButton';
import NavBar from '../components/Navigation/NavBar';
import CustomStatusBar from '../components/Navigation/CustomStatusBar';
import useLanguage from '../hooks/useLanguage';
import FormError from '../components/FormError';

const placeholder = require('../assets/images/image.png');
const UploadImageCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <FontAwesome name={'pencil'} color={Colors.darkText} size={18} />
      </View>
      <Image style={styles.image} source={placeholder} />
    </View>
  );
};

const categories = [
  {
    title: 'Category 1',
    value: 'category-one',
  },
  {
    title: 'Category 2',
    value: 'category-two',
  },
  {
    title: 'Category 3',
    value: 'category-three',
  },
  {
    title: 'Category 41',
    value: 'category-four',
  },
  {
    title: 'Category 5',
    value: 'category-five',
  },
];
const cities = [
  {
    title: 'City 1',
    value: 'city-one',
  },
  {
    title: 'City 2',
    value: 'city-two',
  },
  {
    title: 'City 3',
    value: 'city-three',
  },
  {
    title: 'City 41',
    value: 'city-four',
  },
  {
    title: 'City 5',
    value: 'city-five',
  },
];

const Publish = () => {
  const {translate} = useLanguage();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(translate('validation.productName')),
    description: Yup.string().required(translate('validation.description')),
    price: Yup.string().required(translate('validation.price')),
    address: Yup.string().required(translate('validation.address')),
    category: Yup.object().shape({
      value: Yup.string().required(translate('validation.category')),
    }),
    city: Yup.object().shape({
      value: Yup.string().required(translate('validation.city')),
    }),
  });

  const setNameField = (text: string) => {
    setFieldValue('name', text);
  };
  const setDescriptionField = (text: string) => {
    setFieldValue('description', text);
  };
  const setPriceField = (text: string) => {
    setFieldValue('price', text);
  };
  const setAddressField = (text: string) => {
    setFieldValue('address', text);
  };
  const setCategoryField = (value: {title: string; value: string}) => {
    setFieldValue('category', value);
  };
  const setCityField = (value: {title: string; value: string}) => {
    setFieldValue('city', value);
  };

  const {errors, values, setFieldValue, isSubmitting, submitForm} = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      address: '',
      category: {title: '', value: ''},
      city: {title: '', value: ''},
    },
    validationSchema: validationSchema,
    onSubmit: params => {
      submit(params);
    },
  });

  const submit = (params: any) => {
    console.log(params);
  };
  return (
    <SafeAreaView style={CommonStyle.container}>
      <CustomStatusBar />
      <View style={CommonStyle.wrapper}>
        <NavBar title={translate('publish_ad_menu')} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.content}
          contentContainerStyle={styles.containerStyle}>
          <View style={styles.section}>
            <LabeledInput
              label={translate('product_name_label')}
              style={styles.inputStyle}
              labelStyle={styles.label}
              value={values.name}
              setValue={setNameField}
              textStyle={styles.inputTextStyle}
              placeholder={translate('product_name_input_helper')}
            />
            <FormError error={errors.name} />
          </View>
          <View style={styles.section}>
            <LabeledInput
              label={'Product Description'}
              style={styles.inputBoxStyle}
              labelStyle={styles.label}
              value={values.description}
              setValue={setDescriptionField}
              textStyle={styles.inputTextStyle}
              placeholder={translate('product_description_input_helper')}
            />
            <FormError error={errors.description} />
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>
              {translate('category_dropdown_label')}
            </Text>
            <DropDownPicker
              items={categories}
              placeholder={translate('category_dropdown_label')}
              selected={values.category}
              setSelected={setCategoryField}
            />
            <FormError error={errors?.category?.value} />
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>{translate('city_dropdown_label')}</Text>
            <DropDownPicker
              items={cities}
              placeholder={translate('city_dropdown_label')}
              selected={values.city}
              setSelected={setCityField}
            />
            <FormError error={errors?.city?.value} />
          </View>
          <View style={styles.section}>
            <View style={styles.grid}>
              <UploadImageCard />
              <UploadImageCard />
              <UploadImageCard />
              <UploadImageCard />
            </View>
          </View>
          <View style={styles.section}>
            <LabeledInput
              label={translate('price_input_label')}
              style={styles.inputStyle}
              labelStyle={styles.label}
              value={values.price}
              setValue={setPriceField}
              textStyle={styles.inputTextStyle}
              placeholder={translate('price_input_helper_text')}
            />
            <FormError error={errors.price} />
          </View>
          <View style={styles.section}>
            <LabeledInput
              label={translate('address_label')}
              style={styles.inputStyle}
              labelStyle={styles.label}
              value={values.address}
              setValue={setAddressField}
              textStyle={styles.inputTextStyle}
              placeholder={translate('address_input_helper_text')}
            />
            <FormError error={errors.address} />
          </View>
          <View style={styles.section}>
            <RippleButton
              onPress={submitForm}
              btnTextStyle={styles.btnTextStyle}
              btnText={translate('publish_ad_menu')}
              style={styles.btnStyle}
              disabled={isSubmitting}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingBottom: 30,
  },
  content: {
    ...CommonStyle.content,
    ...CommonStyle.defaultWrapper,
  },

  section: {
    marginBottom: 12,
  },
  label: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 14,
    color: Colors.darkText,
    marginBottom: 8,
  },
  inputStyle: {
    width: '100%',
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.white,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  inputBoxStyle: {
    width: '100%',
    height: 120,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.white,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  inputTextStyle: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 16,
    color: Colors.darkText,
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  card: {
    width: '45%',
    height: 150,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.white,
    borderRadius: 4,
    ...CommonStyle.center,
    marginBottom: 12,
  },
  icon: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    ...CommonStyle.center,
    zIndex: 1,
    top: 5,
    right: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  btnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.ternary,
    borderRadius: 4,
    ...CommonStyle.center,
  },
  btnTextStyle: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 16,
    color: Colors.white,
    textTransform: 'uppercase',
  },
});

export default Publish;
