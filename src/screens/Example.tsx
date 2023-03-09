import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CommonStyle from '../theme/CommonStyle';

const Example = () => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.wrapper}>
        <View style={CommonStyle.content}>
          <Text>Example</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Example;
