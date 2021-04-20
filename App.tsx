import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import HikesScreen from "./src/screens/HikesScreen";
import PlanScreen from "./src/screens/PlanScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import ResourcesScreen from "./src/screens/ResourcesScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Hikes":
                iconName = focused ? "walking" : "walking";
                break;
              case "Plan":
                iconName = focused ? "mountain" : "mountain";
                break;
              case "Resources":
                iconName = focused ? "toolbox" : "toolbox";
                break;
              case "Settings":
                iconName = focused ? "sliders-h" : "sliders-h";
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#604860",
          inactiveTintColor: "#484848",
        }}
      >
        <Tab.Screen name="Hikes" component={HikesScreen} />
        <Tab.Screen name="Plan" component={PlanScreen} />
        <Tab.Screen name="Resources" component={ResourcesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
