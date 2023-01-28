import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  Ionicons } from "@expo/vector-icons";
import {Discover} from './disCover'
import {Setting} from './setting'

const Tab = createBottomTabNavigator();

export const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          lazy: "v",
  
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Discover") {
              iconName = focused ? "home-outline" : "home";
            } else if (route.name === "setting") {
              iconName = focused ? "settings-outline" : "settings";
              size = focused ? size + 8 : size + 2;
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Discover"
          component={Discover}
        />
        <Tab.Screen
          name="setting"
          component={Setting}
  
        />
      </Tab.Navigator>
    );
  };