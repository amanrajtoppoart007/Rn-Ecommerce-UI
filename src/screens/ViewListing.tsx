import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import CommonStyle from '../theme/CommonStyle';
import CustomStatusBar from '../components/Navigation/CustomStatusBar';
import NavBar from '../components/Navigation/NavBar';
import ImageSlider from '../components/ImageSlider';
import Colors from '../theme/Colors';
import {TouchableRipple} from 'react-native-paper';
import Fonts from '../theme/Fonts';
import ListingsSlider from '../components/ListingsSlider';
import CustomStyle from '../theme/CustomStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RippleView from '../components/Button/RippleView';

const ViewListing = () => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <CustomStatusBar />
      <View style={CommonStyle.wrapper}>
        <NavBar title={'Listing Details'} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.content}
          contentContainerStyle={styles.containerStyle}>
          <View style={styles.section}>
            <ImageSlider />
          </View>
          <View style={styles.section}>
            <View style={CommonStyle.rowSpaceBetween}>
              <TouchableRipple style={styles.categoryBtnStyle}>
                <Text style={styles.categoryBtnTextStyle}>
                  Shopping (Food & Drinks)
                </Text>
              </TouchableRipple>
              <Text style={styles.priceTextStyle}>CAF 10000</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.name}>4 Yard double bed carpet fabric</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.date}>Published at 8th march 2023</Text>
          </View>
          <View style={styles.detailSection}>
            <Text style={styles.title}>Product Description</Text>
            <View style={CustomStyle.padding(4)}>
              <Text style={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </View>
          </View>
          <View style={styles.detailSection}>
            <Text style={styles.title}>Product Details</Text>
            <View style={CustomStyle.padding(4)}>
              <View style={CommonStyle.rowSpaceBetween}>
                <Text style={styles.dataTitle}>Condition</Text>
                <Text style={styles.dataText}>Good</Text>
              </View>
              <View style={CommonStyle.rowSpaceBetween}>
                <Text style={styles.dataTitle}>Location</Text>
                <Text style={styles.dataText}>Arizona , South Dacota</Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>You may be interested in</Text>
            <ListingsSlider />
          </View>
        </ScrollView>
        <View style={styles.btnSection}>
          <RippleView
            style={[
              styles.btnStyle,
              CustomStyle.backgroundColor(Colors.success),
            ]}>
            <FontAwesome name={'phone'} color={Colors.white} size={25} />
          </RippleView>
          <RippleView
            style={[
              styles.btnStyle,
              CustomStyle.backgroundColor(Colors.ternary),
            ]}>
            <Ionicons name={'chatbox-outline'} color={Colors.white} size={25} />
          </RippleView>
          <RippleView
            style={[styles.btnStyle, CustomStyle.backgroundColor('gray')]}>
            <FontAwesome name={'envelope-o'} color={Colors.white} size={25} />
          </RippleView>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  content: {
    ...CommonStyle.content,
    ...CommonStyle.defaultWrapper,
  },
  containerStyle: {
    paddingBottom: 60,
  },
  section: {
    marginVertical: 6,
  },
  title: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 18,
    color: Colors.darkText,
  },
  categoryBtnStyle: {
    height: 28,
    paddingHorizontal: 4,
    backgroundColor: Colors.ternary,
    borderRadius: 4,
    ...CommonStyle.center,
  },
  categoryBtnTextStyle: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 11,
    color: Colors.white,
  },
  priceTextStyle: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 22,
    color: Colors.ternary,
  },
  name: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 16,
    color: Colors.darkText,
  },
  date: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 12,
    color: Colors.darkText,
  },
  description: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 12,
    color: 'gray',
  },
  detailSection: {
    minHeight: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingVertical: 4,
  },

  dataTitle: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 14,
    color: Colors.darkText,
  },
  dataText: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 14,
    color: 'gray',
  },
  btnSection: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    height: 55,
    width: '100%',
    ...CommonStyle.rowSpaceEven,
  },
  btnStyle: {
    width: '32%',
    height: 50,
    backgroundColor: Colors.ternary,
    borderRadius: 4,
    ...CommonStyle.center,
  },
  btnTextStyle: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 16,
    color: Colors.white,
  },
});

export default ViewListing;
