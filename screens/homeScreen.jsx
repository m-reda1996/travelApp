import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";

import hero from "../assets/hero.png";

export function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },[navigation]);

  return (
    <SafeAreaView className="bg-white flex-1  relative">
      <View className="flex-row mt-6 px-7 items-center space-x-4">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#efe97b] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-gray-600 text-3xl font-semibold ">Travel</Text>
      </View> 

      <View className="px-7 mt-4 space-y-4">
        <Text className="text-[#d29f9f] text-[38px] font-semibold ">
          Enjoy the trip with
        </Text>
        <Text className="text-[#533a3a] text-[35px] font-semibold ">
          Good Moments
        </Text>
        <Text className="text-[#181717] text-[18px] ">
          Lorem, ipsum dolor sit amet consectet
        </Text>
      </View>

      <View className="w-[350px] h-[350px] bg-[#efe97b] rounded-full absolute bottom-28 left-56 "></View>
      <View className="w-[350px] h-[350px] bg-[#19784a] rounded-full absolute -bottom-24 right-52 "></View>

      <View className="flex-1 relative items-center justify-center ">
        {/* todo image in android */}
        <Animatable.Image
          animation="fadeIn"
          easing="ease-out"
          source={hero}
          className="h-full w-full object-cover mt-20 absolute -bottom-10"
        />
          <TouchableOpacity 
          onPress={() => navigation.navigate('Bottom')}
          className="absolute bottom-16 w-24 h-24 rounded-full justify-center items-center border-l-2 border-r-2 border-t-4 border-[#efe97b]">
            <Animatable.View
              animation={"pulse"}
              easing="ease-in-out"
              iterationCount="infinite"
              className="w-20 h-20 items-center justify-center rounded-full bg-[#efe97b] "
            >
              <Text className="text-gray-600 text-[40px] font-semibold">
                Go
              </Text>
            </Animatable.View>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
