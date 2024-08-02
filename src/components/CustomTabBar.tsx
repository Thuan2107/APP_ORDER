import React from 'react';
import { View, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import NavigationItem from './NavigationItem';


import IconOverview from '../../assets/icon-overview.svg';
import IconOrder from '../../assets/icon-document.svg';
import IconArea from '../../assets/icon-area.svg';
import IconFee from '../../assets/icon-fee.svg';
import IconUltility from '../../assets/icon-ultility.svg';

import { SvgProps } from 'react-native-svg';


const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
        const isFocused = state.index === index;

        // Determine icon name based on route
        let iconName: React.FC<SvgProps>;
        let iconFocus: React.FC<SvgProps>;
        let name: string;
        switch (route.name) {
            case 'Overview':
                iconName = IconOverview; // Use Ionicons names
                name = 'Tổng quan'
                break;
            case 'Order':
                iconName = IconOrder; // Use Ionicons names
                name = 'Đơn hàng'
                break;
            case 'Area':
                iconName = IconArea; // Use Ionicons names
                name = 'Khu vực'
                break;
            case 'Fee':
                iconName = IconFee; // Use Ionicons names
                name = 'Chi phí'
                break;
            case 'Ultility':
                iconName = IconUltility; // Use Ionicons names
                name = 'Tiện ích'
                break;
          // Add other cases here
            default:
                iconName = IconOrder; // Use Ionicons names
                name = 'Đơn hàng'
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tab}
          >
            <NavigationItem name={name} icon={iconName} isFocused={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 2,
    paddingBottom: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default CustomTabBar;
