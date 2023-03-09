import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import CustomStyle from '../../theme/CustomStyle';
import HomeIcon from '../Svg/Tab/HomeIcon';
import SquareIcon from '../Svg/Tab/SquareIcon';
import PlusIcon from '../Svg/Tab/PlusIcon';
import SearchIcon from '../Svg/Tab/SearchIcon';
import UserIcon from '../Svg/Tab/UserIcon';
import CommonStyle from '../../theme/CommonStyle';
import {Surface} from 'react-native-paper';
import Fonts from '../../theme/Fonts';
import useLanguage from '../../hooks/useLanguage';
export interface TabBarProps<Route> {
  state: {routes: Route[]; index: number};
  navigation: any;
  descriptors: any;
}

const Icon = ({tab, color}: {tab: string; color: string}) => {
  switch (tab) {
    case 'Home':
      return <HomeIcon color={color} />;
    case 'Categories':
      return <SquareIcon color={color} />;
    case 'Publish':
      return <PlusIcon color={Colors.secondary} />;
    case 'Search':
      return <SearchIcon color={color} />;
    case 'Profile':
      return <UserIcon color={color} />;

    default:
      return null;
  }
};

const TabBarItem = ({
  title,
  tab,
  isFocused,
  translate,
}: {
  title: string;
  tab: string;
  isFocused: boolean;
  translate: Function;
}) => {
  return (
    <View
      style={tab === 'Publish' ? styles.centerTabStyle : CommonStyle.center}>
      <Icon tab={tab} color={isFocused ? Colors.secondary : Colors.darkText} />
      <View style={CustomStyle.marginVertical(2)}>
        <Text
          style={isFocused ? styles.actionTabTextStyle : styles.tabTextStyle}>
          {translate(title)}
        </Text>
      </View>
    </View>
  );
};
const TabBar = ({
  state: routeState,
  descriptors,
  navigation,
}: TabBarProps<any>) => {
  const {translate} = useLanguage();
  return (
    <Surface elevation={3} style={styles.card}>
      {routeState.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = routeState.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index?.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabStyle}>
            <TabBarItem
              title={label}
              tab={route.name}
              translate={translate}
              isFocused={isFocused}
            />
          </TouchableOpacity>
        );
      })}
    </Surface>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 65,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
  },
  tabTextStyle: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 14,
    color: Colors.darkText,
  },
  actionTabTextStyle: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 14,
    color: Colors.secondary,
  },
  tabStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerTabStyle: {
    position: 'absolute',
    bottom: -25,
    ...CommonStyle.center,
  },
});

export default TabBar;
