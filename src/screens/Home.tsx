import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CommonStyle from '../theme/CommonStyle';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';
import AdButton from '../components/Home/AdButton';
import ListingCard from '../components/ListingCard';
import CustomStatusBar from '../components/Navigation/CustomStatusBar';
import {NavigationProp} from '@react-navigation/native';
import Header from '../components/Navigation/Header';
import useLanguage from '../hooks/useLanguage';
import Slider from '../components/Category/Slider';
import PopularListingSlider from '../components/PopularListingSlider';

const productImage = require('../assets/images/placeholder.png');
const Home = ({navigation}: {navigation: NavigationProp<any>}) => {
  const {translate} = useLanguage();

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
  return (
    <SafeAreaView style={CommonStyle.container}>
      <CustomStatusBar />
      <View style={CommonStyle.wrapper}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}> Popular Products</Text>
          </View>
          <View style={styles.section}>
            <PopularListingSlider />
          </View>
          <View style={styles.section}>
            <Text style={styles.categoryTitle}> {translate('category')}</Text>
          </View>
          <View style={styles.section}>
            <Slider />
          </View>
          <View style={styles.section}>
            <AdButton />
          </View>
          <View style={styles.section}>
            <View style={CommonStyle.rowSpaceBetween}>
              <Text style={styles.sectionTitle}>
                {translate('recent_products')}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Listings', {title: 'Recent Products'})
                }>
                <Text style={styles.sectionHelperText}>
                  {translate('display_all')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.grid}>
              {products.map((item: any, index: number) => {
                return (
                  <View style={styles.card} key={index?.toString()}>
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
  grid: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  categoryTitle: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 18,
    color: Colors.darkText,
  },
  miniCard: {
    width: '30%',
    marginVertical: 6,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 18,
    color: Colors.darkText,
  },
  sectionHelperText: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 16,
    color: '#52CDB9',
  },
  card: {
    width: '49%',
    marginVertical: 6,
  },
});

export default Home;
