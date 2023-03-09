import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CommonStyle from '../theme/CommonStyle';
import Colors from '../theme/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Navigation/Header';
import CustomStatusBar from '../components/Navigation/CustomStatusBar';

const RenderIcon = ({icon, label}: {icon: string; label: string}) => {
  return (
    <View style={styles.section}>
      <View>
        <View style={styles.iconCircle}>
          <FontAwesome name={icon} color={Colors.white} size={20} />
        </View>
      </View>
      <View style={styles.labelWrap}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const Profile = () => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <CustomStatusBar />
      <View style={CommonStyle.wrapper}>
        <Header />
        <View style={CommonStyle.content}>
          <View style={styles.centeredView}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>I</Text>
            </View>
            <View style={styles.card}>
              <View style={CommonStyle.center}>
                <Text style={styles.cardTitle}>Ivior Shop</Text>
                <Text style={styles.infoText}>Member since 8th July 2023</Text>
              </View>
              <View>
                <RenderIcon icon={'phone'} label={'+918839421623'} />
                <RenderIcon
                  icon={'envelope'}
                  label={'amanrajtoppoart@gmail.com'}
                />
              </View>
            </View>
          </View>
        </View>
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
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.secondary,
    ...CommonStyle.center,
  },
  circleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.white,
  },
  card: {
    width: '90%',
    height: 220,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.white,
    borderRadius: 4,
    marginVertical: 15,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.darkText,
    marginTop: 20,
  },
  infoText: {
    fontSize: 14,
    color: Colors.darkText,
    margin: 12,
  },
  section: {
    paddingHorizontal: 20,
    ...CommonStyle.rowFlexStart,
    marginVertical: 6,
  },
  label: {
    fontSize: 14,
    color: Colors.darkText,
  },
  labelWrap: {
    marginHorizontal: 8,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    ...CommonStyle.center,
  },
});

export default Profile;
