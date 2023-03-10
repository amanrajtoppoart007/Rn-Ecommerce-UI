import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Dimensions} from 'react-native';
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';
interface Item {
  color: string;
}

const ImageSlider: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function generateRandomColors(num: number) {
    let colors = [];
    for (let i = 0; i < num; i++) {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
      colors.push({color});
    }
    return colors;
  }

  const DATA: Item[] = generateRandomColors(10);

  const renderItem = ({item}: {item: Item}) => {
    return (
      <View style={[styles.item, {backgroundColor: item.color}]}>
        <View style={styles.image} />
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
            key={index?.toString()}
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
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        pagingEnabled
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
      />
      {/*renderDots()*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 150,
    backgroundColor: Colors.transparent,
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
    backgroundColor: 'red',
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
