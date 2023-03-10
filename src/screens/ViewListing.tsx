import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CommonStyle from '../theme/CommonStyle';

const ViewListing = () => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.wrapper}>
        <View style={CommonStyle.content}>
          <Text>ViewListing</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewListing;
