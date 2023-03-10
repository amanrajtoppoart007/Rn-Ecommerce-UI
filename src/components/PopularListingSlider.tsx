import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';
const productImage = require('../assets/images/slider-image.png');
interface Item {
  id: number;
}

const PopularListingSlider: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const DATA: Item[] = [...Array(20).keys()].map((_, i) => ({id: i}));

  const renderItem = ({item}: {item: Item}) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={productImage} />
        <Text style={styles.title}>Some Random text here{item.id + 1}</Text>
      </View>
    );
  };

  const handleScroll = (event: any) => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const index = Math.round(contentOffset.x / layoutMeasurement.width);
    setSelectedIndex(index);
  };

  const renderDots = () => {
    return (
      <View style={styles.dotContainer}>
        {DATA.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.dot,
              {backgroundColor: index === selectedIndex ? 'blue' : 'gray'},
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        pagingEnabled
      />
      {/*renderDots()*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width - 20,
    height: 130,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 12,
    color: Colors.darkText,
    textAlign: 'center',
  },
  item: {
    width: Dimensions.get('window').width,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default PopularListingSlider;
