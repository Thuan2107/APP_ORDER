import { Button, StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomTabBar from './src/components/CustomTabBar';
import OverviewPage from './src/pages/OverviewPage';
import OrderPage from './src/pages/OrderPage';
import AreaPage from './src/pages/AreaPage';
import FeePage from './src/pages/FeePage';
import UltilityPage from './src/pages/UltilityPage';
import React from 'react';
import OrderDetailPage from './src/modules/order/pages/OrderDetailPage';
import FoodMenuPage from './src/modules/food-menu/pages/FoodMenuPage';
import Toast from 'react-native-toast-message';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="OrderDetail" component={OrderDetailPage} />
        <Stack.Screen name="FoodMenu" component={FoodMenuPage} />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return null; // Use the custom tab bar instead
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Overview" component={OverviewPage} />
      <Tab.Screen name="Order" component={OrderPage} />
      <Tab.Screen name="Area" component={AreaPage} />
      <Tab.Screen name="Fee" component={FeePage} />
      <Tab.Screen name="Ultility" component={UltilityPage} />
    </Tab.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
