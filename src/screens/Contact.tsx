import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CommonStyle from '../theme/CommonStyle';
import CustomStatusBar from '../components/Navigation/CustomStatusBar';

const Contact = () => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <CustomStatusBar />
      <View style={CommonStyle.wrapper}>
        <View style={CommonStyle.content}>
          <Text>Example</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Contact;
