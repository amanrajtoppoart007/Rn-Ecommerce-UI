import React, {useMemo, useState} from 'react';
import {View, FlatList, StyleSheet, Dimensions} from 'react-native';
import categories from '../../data/categories';
import SliderCard from './SliderCard';

interface Item {
  title: string;
  Svg: React.ReactNode;
}

const ITEM_WIDTH = Dimensions.get('window').width / 3;

const FlatListSlider: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const list = useMemo(() => {
    return categories.map(item => item);
  }, []);

  const renderItem = ({item}: {item: Item}) => {
    return <SliderCard title={item.title} Svg={item.Svg} />;
  };

  const handleScroll = (event: any) => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const index = Math.round(contentOffset.x / layoutMeasurement.width);
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        pagingEnabled
        snapToInterval={ITEM_WIDTH + 10} // add 10px spacing between items
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  item: {
    width: ITEM_WIDTH,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 1,
  },
});

export default FlatListSlider;
