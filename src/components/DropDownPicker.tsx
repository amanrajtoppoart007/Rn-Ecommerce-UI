import React, {useRef, useState} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';

import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomStyle from '../theme/CustomStyle';
import CommonStyle from '../theme/CommonStyle';

function DropDownPicker({
  items,
  selected,
  setSelected,
  placeholder,
}: {
  items: any[];
  selected: any;
  setSelected: Function;
  placeholder: string;
}) {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const dropDownBtnRef = useRef<TouchableOpacity>(null);
  const [visible, setVisible] = useState(false);

  const modalOpacity = useRef(new Animated.Value(0)).current;
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownWidth, setDropDownWidth] = useState(0);

  const fadeIn = () => {
    Animated.timing(modalOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(modalOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    dropDownBtnRef.current?.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
      setDropDownWidth(_w);
    });
    setVisible(true);
  };

  const onItemPress = (item: any) => {
    setSelected(item);
    setVisible(false);
  };

  const renderItem = ({item}: {item: any}) => {
    const {title, value} = item;

    return (
      <TouchableOpacity
        style={[
          styles.listItemStyle,
          value === selected.value ? styles.activeListStyle : {},
        ]}
        onPress={() => onItemPress(item)}>
        <Text style={styles.listItemLabelStyle}>{title}</Text>
      </TouchableOpacity>
    );
  };
  const renderDropdown = () => {
    return (
      <Modal
        visible={visible}
        onShow={fadeIn}
        onDismiss={fadeOut}
        transparent
        animationType="fade"
        supportedOrientations={['portrait', 'landscape']}>
        <AnimatedTouchable
          style={[styles.overlay, {opacity: modalOpacity}]}
          onPress={() => (visible ? setVisible(false) : toggleDropdown())}>
          <View
            style={[styles.dropDown, {top: dropdownTop, width: dropdownWidth}]}>
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </AnimatedTouchable>
      </Modal>
    );
  };

  return (
    <View>
      <TouchableOpacity
        ref={dropDownBtnRef}
        onPress={() => toggleDropdown()}
        style={styles.btnStyle}>
        <View style={CustomStyle.width('80%')}>
          <Text style={styles.btnTextStyle}>
            {selected?.title?.length > 0 ? selected.title : placeholder}
          </Text>
        </View>
        <View>
          <MaterialIcons
            name={visible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            onPress={() => (visible ? setVisible(false) : toggleDropdown())}
            size={25}
            color={Colors.white}
          />
        </View>
      </TouchableOpacity>
      {renderDropdown()}
    </View>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',
    height: 50,
    borderRadius: 4,
    backgroundColor: Colors.secondary,
    ...CommonStyle.rowSpaceAround,
    paddingHorizontal: 8,
  },
  dropDown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
    alignSelf: 'center',
    borderRadius: 16,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },

  btnTextStyle: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 13,
    color: '#FFFFFF',
  },
  listItemStyle: {
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    borderRadius: 4,
    marginVertical: 4,
    backgroundColor: Colors.secondary,
  },
  activeListStyle: {
    backgroundColor: Colors.primary,
  },
  listItemLabelStyle: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 13,
    color: Colors.white,
  },
});

export default DropDownPicker;
