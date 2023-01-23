import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

import { Text, View } from "react-native";

export const Setting  = () =>{
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    },[navigation]);
  
    return (
        <View>
            <Text>
                how are you 2
            </Text>
        </View>
    )
}