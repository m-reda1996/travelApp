import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/homeScreen";
import { Discover } from "./screens/disCover";
import { ItemScreen } from "./screens/itemScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { Setting } from "./screens/setting";
import { Onboarding } from "./screens/onboarding";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BB = () => {
  return <Text>how are you</Text>;
};

const BottomTabScreen = () => {
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
