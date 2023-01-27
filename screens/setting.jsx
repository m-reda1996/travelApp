import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Setting  = () =>{
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    },[navigation]);
  
    return (
        <SafeAreaView>
            <Text>
                setting
            </Text>
        </SafeAreaView>
    )
}