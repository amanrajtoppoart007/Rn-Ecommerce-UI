import React, {useMemo} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import CommonStyle from '../theme/CommonStyle';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';
import CategoryCard from '../components/Category/CategoryCard';
import CustomStatusBar from '../components/Navigation/CustomStatusBar';
import Header from '../components/Navigation/Header';
import useLanguage from '../hooks/useLanguage';

import categories from '../data/categories';

const Categories = () => {
  const {translate} = useLanguage();
  const list = useMemo(() => {
    return categories.map(item => item);
  }, []);
  return (
    <SafeAreaView style={CommonStyle.container}>
      <CustomStatusBar />
      <View style={CommonStyle.wrapper}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.categoryTitle}>{translate('category')}</Text>
            <View style={styles.grid}>
              {list.map(
                (
                  item: {title: string; Svg: React.ReactNode},
                  index: number,
                ) => {
                  return (
                    <View style={styles.card} key={index?.toString()}>
                      <CategoryCard Svg={item.Svg} title={item.title} />
                    </View>
                  );
                },
              )}
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
    width: '33%',
    marginVertical: 6,
  },
  categoryTitle: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 18,
    color: Colors.darkText,
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

export default Categories;
