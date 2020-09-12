import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './src/screens/HomeScreen';
import  HikesScreen  from './src/screens/HikesScreen';
import  PlanScreen  from './src/screens/PlanScreen';
import  SettingsScreen  from './src/screens/SettingsScreen';
import  ResourcesScreen  from './src/screens/ResourcesScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Hikes" component={HikesScreen}/>
        <Tab.Screen name="Plan" component={PlanScreen}/>
        <Tab.Screen name="Resources" component={ResourcesScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
