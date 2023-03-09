import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import CommonStyle from '../theme/CommonStyle';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';
import {products} from '../data/products';
import ListingCard from '../components/ListingCard';
import NavBar from '../components/Navigation/NavBar';
import CustomStatusBar from '../components/Navigation/CustomStatusBar';

const Listings = ({route}: {route: any}) => {
  const {title = ''} = route?.params;
  return (
    <SafeAreaView style={CommonStyle.container}>
      <CustomStatusBar />
      <View style={CommonStyle.wrapper}>
        <NavBar title={title} />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
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
  card: {
    width: '49%',
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
});

export default Listings;
