import React, { useLayoutEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const ItemScreen = () => {
  const navgation = useNavigation();
  useLayoutEffect(() => {
    navgation.setOptions({
      headerShown: false,
    });
  },[navgation]);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            className="w-full h-72 object-cover rounded-2xl"
            source={{
              uri: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
            }}
          />
          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navgation.navigate("Discover")}
              className="w-10 h-10 rounded-md items-center justify-center bg-[#ffffff9b] "
            >
              <FontAwesome name="chevron-left" color="#7ee97e" size={24} />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#3c983ca2] ">
              <FontAwesome name="heartbeat" color="#fff" size={24} />
            </TouchableOpacity>
          </View>
          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row justify-center items-center gap-2">
              <Text className="text-[16px] font-bold text-gray-100"> 20$</Text>
              <Text className="text-[26px] font-bold text-gray-100">
                {" "}
                10 : 45$
              </Text>
            </View>
            <View className=" px-2 py-2 rounded-md bg-teal-100">
              <Text>Closed Now</Text>
            </View>
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            {" "}
            XYZ Restaurant{" "}
          </Text>
        </View>
        <View className="flex-row items-center space-x-3 mt-2">
          <FontAwesome name="map-marker" size={25} color="#8c9ea6" />
          <Text className=" font-semibold text-[22px]">Egypt</Text>
        </View>
        <View className="mt-5 flex-row items-center justify-between">
          <View className="flex-row gap-2 items-center justify-center">
            <View className="bg-[#ffd8d8] p-2 rounded-lg">
              <FontAwesome name="star" size={24} color="#fd9090" />
            </View>
            <View>
              <Text className="mb-[3px] font-semibold">5.0</Text>
              <Text className="font-semibold">Ratings</Text>
            </View>
          </View>
          <View className="flex-row gap-2 items-center justify-center">
            <View className="bg-[#ffd8d8] p-2 rounded-lg">
              <MaterialIcons name="attach-money" size={24} color="black" />
            </View>
            <View>
              <Text className="mb-[3px] font-semibold">$$</Text>
              <Text className="font-semibold">price Level</Text>
            </View>
          </View>
          <View className="flex-row gap-2 items-center justify-center">
            <View className="bg-[#ffd8d8] p-2 rounded-lg">
              <MaterialIcons name="attach-money" size={24} color="black" />
            </View>
            <View>
              <Text className="mb-[3px] font-semibold">Northeast</Text>
              <Text className="font-semibold">Bearing</Text>
            </View>
          </View>
        </View>
        <View>
          <Text className="mt-6 tracking-wider  font-semibold text-[#6f6a6a] mx-auto w-[98%] ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            consectetur facilis dolorum alias atque, molestiae nemo delectus
            tempore illum animi possimus id laborum facere placeat repellat
            sequi impedit. Itaque, esse?
          </Text>
        </View>
        <View className=" flex-row gap-2 items-center justify-start flex-wrap mt-4">
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-200">
            <Text>adfasdflshjfd</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-200">
            <Text>kdnbdb</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-200">
            <Text>dkdks</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-200">
            <Text>sadfsfsfs</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-200">
            <Text>osafsne</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-200">
            <Text>asdfsfsfs</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-200">
            <Text>one</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-200">
            <Text>one</Text>
          </TouchableOpacity>
        </View>
        <View >
          <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl py-3">
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-lg">+201014851445</Text>
            </View>
          </View>
          <View className="space-y-2  bg-gray-100 rounded-2xl mt-1 py-3">
            <View className="items-center flex-row space-x-6">
              <MaterialIcons name="email" size={24} color="#428288" />
              <Text className="text-lg">elshentenawym@Gmail.com</Text>
            </View>
          </View>
          <View className="space-y-2  bg-gray-100 rounded-2xl py-3 mt-1 ">
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="map-pin" size={24} color="#428288" />
              <Text className="text-lg">+201014851445</Text>
            </View>
          </View>
          <View className = 'mb-10'>
            <TouchableOpacity className="mt-4 px-4 py-4 rounded-lg bg-[#62b779]">
              <Text className="text-center text-3xl font-semibold uppercase tracking-wide text-gray-100">Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
