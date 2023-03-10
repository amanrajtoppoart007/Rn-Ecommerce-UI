import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
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
import ListingCard from '../components/ListingCard';
const productImage = require('../assets/images/placeholder.png');

const products = [
  {
    title: 'Product 1',
    price: 300,
    image: productImage,
  },
  {
    title: 'Product 2',
    price: 100,
    image: productImage,
  },
  {
    title: 'Product 3',
    price: 700,
    image: productImage,
  },
  {
    title: 'Product 4',
    price: 500,
    image: productImage,
  },
  {
    title: 'Product 5',
    price: 400,
    image: productImage,
  },
  {
    title: 'Product 6',
    price: 800,
    image: productImage,
  },
];
const Search = () => {
  const {translate} = useLanguage();
  const [search, setSearch] = useState(false);
  const [keyword, setKeyword] = useState('');

  const onEnterKeyword = (text: string) => {
    if (search) {
      setSearch(false);
    }
    setKeyword(text);
  };
  const onSearch = () => {
    setSearch(true);
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <CustomStatusBar />
      <View style={CommonStyle.wrapper}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View style={styles.cardRow}>
            <View style={CustomStyle.width('65%')}>
              <Input
                style={styles.inputStyle}
                value={keyword}
                setValue={onEnterKeyword}
                textStyle={styles.inputTextStyle}
                placeholder={translate('search_label')}
                onFocus={() => setSearch(false)}
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
          <View style={styles.section}>
            <View style={styles.grid}>
              {keyword?.length > 0 &&
                search &&
                products.map((item: any, index: number) => {
                  return (
                    <View style={styles.listingCard} key={index?.toString()}>
                      <ListingCard item={item} />
                    </View>
                  );
                })}
            </View>
          </View>
        </ScrollView>
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
  grid: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  section: {
    marginBottom: 12,
  },
  listingCard: {
    width: '49%',
    marginVertical: 6,
  },
});

export default Search;
