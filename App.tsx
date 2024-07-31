import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import NavigationItem from './src/components/NavigationItem';
import CustomTabBar from './src/components/CustomTabBar';
import OverviewPage from './src/pages/OverviewPage';
import OrderPage from './src/pages/OrderPage';
import AreaPage from './src/pages/AreaPage';
import FeePage from './src/pages/FeePage';
import UltilityPage from './src/pages/UltilityPage';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            // You can customize tabBarIcon here if needed
            return null; // Use the custom tab bar instead
          },
        })}
      >
        <Tab.Screen name="Overview" component={OverviewPage} />
        <Tab.Screen name="Order" component={OrderPage} />
        <Tab.Screen name="Area" component={AreaPage} />
        <Tab.Screen name="Fee" component={FeePage} />
        <Tab.Screen name="Ultility" component={UltilityPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
