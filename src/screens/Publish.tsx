import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState({title: '', value: ''});
  const [city, setCity] = useState({title: '', value: ''});

  const submit = () => {};
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
              value={name}
              setValue={setName}
              textStyle={styles.inputTextStyle}
              placeholder={translate('product_name_input_helper')}
            />
          </View>
          <View style={styles.section}>
            <LabeledInput
              label={'Product Description'}
              style={styles.inputBoxStyle}
              labelStyle={styles.label}
              value={description}
              setValue={setDescription}
              textStyle={styles.inputTextStyle}
              placeholder={translate('product_description_input_helper')}
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>
              {translate('category_dropdown_label')}
            </Text>
            <DropDownPicker
              items={categories}
              placeholder={translate('category_dropdown_label')}
              selected={category}
              setSelected={setCategory}
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>{translate('city_dropdown_label')}</Text>
            <DropDownPicker
              items={cities}
              placeholder={translate('city_dropdown_label')}
              selected={city}
              setSelected={setCity}
            />
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
              value={price}
              setValue={setPrice}
              textStyle={styles.inputTextStyle}
              placeholder={translate('price_input_helper_text')}
            />
          </View>
          <View style={styles.section}>
            <LabeledInput
              label={translate('address_label')}
              style={styles.inputStyle}
              labelStyle={styles.label}
              value={address}
              setValue={setAddress}
              textStyle={styles.inputTextStyle}
              placeholder={translate('address_input_helper_text')}
            />
          </View>
          <View style={styles.section}>
            <RippleButton
              onPress={submit}
              btnTextStyle={styles.btnTextStyle}
              btnText={translate('publish_ad_menu')}
              style={styles.btnStyle}
              rippleColor={Colors.rippleColor}
              borderRadius={4}
              elevation={1}
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
