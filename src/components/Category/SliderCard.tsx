import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import CommonStyle from '../../theme/CommonStyle';
import RippleView from '../Button/RippleView';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const CategoryCard = ({title, Svg}: {title: string; Svg: React.ReactNode}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <RippleView
      onPress={() =>
        navigation.navigate('Listings', {
          title: title,
        })
      }
      style={styles.card}
      rippleColor={Colors.rippleColor}
      borderRadius={4}
      elevation={2}>
      <View style={styles.content}>
        <View>
          <Text>{Svg}</Text>
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </RippleView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 120,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.white,
    borderRadius: 4,
    ...CommonStyle.center,
    marginRight: 10,
  },
  content: {
    width: '100%',
    height: '100%',
    ...CommonStyle.center,
  },
  image: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  textWrap: {
    marginTop: 8,
  },
  title: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 13,
    color: Colors.ternary,
  },
});

export default CategoryCard;
