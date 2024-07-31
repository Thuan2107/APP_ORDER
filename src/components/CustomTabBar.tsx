import React from 'react';
import { View, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import NavigationItem from './NavigationItem';
import iconOverview from '../../assets/icon-overview.png';
import iconOrder from '../../assets/icon-overview.png';
import iconArea from '../../assets/icon-area.png';
import iconFee from '../../assets/icon-fee.png';
import iconUltility from '../../assets/icon-ultility.png';
import iconOverviewActive from '../../assets/icon-overview-active.png';
import iconOrderActive from '../../assets/icon-order-active.png';
import iconAreaActive from '../../assets/icon-area.png';
import iconFeeActive from '../../assets/icon-fee.png';
import iconUltilityActive from '../../assets/icon-ultility.png';

import { Asset } from 'expo-asset';




const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
        const isFocused = state.index === index;

        // Determine icon name based on route
        let iconName: ImageSourcePropType;
        let iconFocus: ImageSourcePropType;
        let name: string;
        switch (route.name) {
            case 'Overview':
                iconName = iconOverview; // Use Ionicons names
                iconFocus = iconOverviewActive;
                name = 'Tổng quan'
                break;
            case 'Order':
                iconName = iconOrder; // Use Ionicons names
                iconFocus = iconOrderActive;
                name = 'Đơn hàng'
                break;
            case 'Area':
                iconName = iconArea; // Use Ionicons names
                iconFocus = iconAreaActive;
                name = 'Khu vực'
                break;
            case 'Fee':
                iconName = iconFee; // Use Ionicons names
                iconFocus = iconFee;
                name = 'Chi phí'
                break;
            case 'Ultility':
                iconName = iconUltility; // Use Ionicons names
                iconFocus = iconUltilityActive;
                name = 'Tiện ích'
                break;
          // Add other cases here
            default:
                iconName = iconOrder; // Use Ionicons names
                iconFocus = iconOverview;
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
            <NavigationItem name={name} icon={isFocused ? iconFocus : iconName} isFocused={isFocused} />
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
