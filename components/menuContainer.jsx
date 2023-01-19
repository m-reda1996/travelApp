import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const MenuContainer = ({ title, imageSrc, type ,setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase())
  }
    return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
      <View
        className={`w-24 h-24 rounded-full items-center justify-center p-2  ${
          type === title.toLowerCase() ? "bg-slate-200" : ""
        }`}
      >
        <Image
          source={imageSrc}
          className={`w-full h-full object-contain rounded-full `}
        />
      </View>

      <Text className="text-[#604f4f] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};
