import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

// Define the type for the stack navigator
export type RootStackParamList = {
  Main: undefined;
  Details: undefined; // Add any parameters if needed
};

// Define the type for the tab navigator
export type MainTabParamList = {
  Overview: undefined;
  Order: undefined;
  Area: undefined;
  Fee: undefined;
  Ultility: undefined;
};

// Navigation props for the stack navigator
export type StackNavigationProps<T extends keyof RootStackParamList> = StackNavigationProp<RootStackParamList, T>;

// Navigation props for the tab navigator
export type TabNavigationProps<T extends keyof MainTabParamList> = BottomTabNavigationProp<MainTabParamList, T>;
