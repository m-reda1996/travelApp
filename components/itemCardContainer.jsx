import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ItemCardContainer = ({ imageSrc, title, location }) => {
  const navgation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navgation.navigate("ItemScreen")}
      style={[style.shadow, { borderRadius: 14 }]}
      className="a border border-[#d7bdbd]  space-y-2 p-2 bg-white w-[170px] my-2"
    >
      <Image
        source={{ uri: imageSrc }}
        style={{ borderTopRightRadius: 14, borderTopLeftRadius: 14 }}
        className=" w-full h-40 object-cover"
      />
      <Text className="text-[#653434] text-[20px] font-bold ">
        {" "}
        {title?.length > 13 ? `${title.slice(0, 13)}..` : title}
      </Text>
      <View className="flex-row justify-center items-center gap-2">
        <FontAwesome name="map-marker" size={20} color="red" />
        <Text className=" text-red-500 text-[16px] font-bold ">
          {" "}
          {location?.length > 15 ? `${location.slice(0, 15)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});
