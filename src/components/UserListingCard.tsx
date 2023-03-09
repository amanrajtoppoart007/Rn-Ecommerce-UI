import React from 'react';
import {StyleSheet, Text, View, Image, ImageSourcePropType} from 'react-native';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';
import {Surface} from 'react-native-paper';
import CommonStyle from '../theme/CommonStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RippleButton from './Button/RippleButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const UserListingCard = ({
  item,
}: {
  item: {title: string; image: ImageSourcePropType; price: number};
}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const {image, title, price} = item;
  return (
    <Surface elevation={3} style={styles.card}>
      <View style={CommonStyle.center}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.price}>${price}</Text>
      </View>
      <View style={styles.section}>
        <View style={CommonStyle.rowFlexStart}>
          <FontAwesome name={'map-o'} color={Colors.darkText} size={16} />
          <Text style={styles.location}>Calista Wise 7292, San Antonio</Text>
        </View>
      </View>
      <View style={styles.section}>
        <RippleButton
          onPress={() => navigation.navigate('EditListing')}
          btnTextStyle={styles.btnTextStyle}
          btnText={'Edit'}
          style={styles.btnStyle}
          rippleColor={Colors.rippleColor}
          borderRadius={4}
        />
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.white,
    borderRadius: 4,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  section: {
    marginVertical: 8,
  },
  title: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 12,
    color: Colors.darkText,
  },
  price: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 22,
    color: Colors.darkText,
  },
  location: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 12,
    color: Colors.darkText,
    width: '90%',
    marginHorizontal: 8,
  },
  btnStyle: {
    width: '100%',
    height: 45,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  btnTextStyle: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 16,
    color: Colors.white,
  },
});

export default UserListingCard;
