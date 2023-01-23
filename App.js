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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BB = () => {
  return <Text>how are you</Text>;
};

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarHideOnKeyboard: true,
    //   // tabBarShowLabel: false,
    //   headerShown: false,
    //   tabBarStyle : {backgroundColor : '#ad40af'},
    //   // lazy: "v",
    //   tabBarStyle: {
    //     // height: 50,
    //   },
    //   tabBarIcon: ({ focused, size, color }) => {
    //     let iconName;
    //     if (route.name === "HomeScreen") {
    //       iconName = focused ? "checkcircleo" : "checkcircleo";
    //       // size = focused ? size + 8 : size + 2;
    //     } else if (route.name === "Discover") {
    //       iconName = focused ? "book" : "book";
    //     } else if (route.name === "BB") {
    //       iconName = focused ? "book" : "book";
    //       // size = focused ? size + 8 : size + 2;
    //     }

    //     return <AntDesign name={iconName} size={size} color={color} />;
    //   },
    // })}
    >
      {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-home" size={24} color="black" />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name={!focused ? "home-outline" : "home"} size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="setting"
        component={Setting}
        options={ {
          tabBarIcon: ({focused}) => (
            <Ionicons name={!focused ?"settings-outline" :"settings"} size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Tab.Screen name="Home" component={HomeScreen} /> */}

        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
