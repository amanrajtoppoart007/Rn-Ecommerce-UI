import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';
import ListingCard from './ListingCard';
interface Item {
  title: string;
  price: number;
  image: ImageSourcePropType;
}
const productImage = require('../assets/images/placeholder.png');
const ImageSlider: React.FC = () => {
  const [_, setSelectedIndex] = useState(0);

  const products = [
    {
      title: 'Product 1',
      price: 300,
      image: productImage,
    },
    {
      title: 'Product 2',
      price: 100,
      image: productImage,
    },
    {
      title: 'Product 3',
      price: 700,
      image: productImage,
    },
    {
      title: 'Product 4',
      price: 500,
      image: productImage,
    },
    {
      title: 'Product 5',
      price: 400,
      image: productImage,
    },
    {
      title: 'Product 6',
      price: 800,
      image: productImage,
    },
  ];

  const renderItem = ({item}: {item: Item}) => {
    return (
      <View style={styles.item}>
        <ListingCard item={item} />
      </View>
    );
  };

  const handleScroll = (event: any) => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const index = Math.round(contentOffset.x / layoutMeasurement.width);
    setSelectedIndex(index);
  };

  return (
    <View>
      <FlatList
        horizontal
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        pagingEnabled
      />
      {/*renderDots()*/}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 12,
    color: Colors.darkText,
    textAlign: 'center',
  },
  item: {
    width: Dimensions.get('window').width / 2 - 20,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
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

export default ImageSlider;
