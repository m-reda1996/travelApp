import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/homeScreen";
import { ItemScreen } from "./screens/itemScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Onboarding } from "./screens/onboarding";
import { BottomTabScreen } from "./screens/BottomTabScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
