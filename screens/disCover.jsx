import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import avater from "../assets/avatar.jpeg";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { MenuContainer } from "../components/menuContainer";
import hotel from "../assets/hotel.png";
import attraction from "../assets/attraction.png";
import restaurants from "../assets/restaurants.png";
import notfound from "../assets/NotFound.png";
import { FontAwesome } from "@expo/vector-icons";
import { ItemCardContainer } from "../components/itemCardContainer";

export const Discover = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [mainDate, setMainDate] = useState(["1"]);
  const navgation = useNavigation();
  const [type, setType] = useState("restaurants");
  useLayoutEffect(() => {
    navgation.setOptions({
      headerShown: false,
    });
  },[navgation]);

  return (
    <SafeAreaView className="flex-1 bg-white relative ">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[42px] text-[#b7e39f] font-bold">Discover</Text>
          <Text className="text-[28px] text-[#7c7f7a] font-bold">
            the Beauty Today{" "}
          </Text>
        </View>
        <View className="w-12 h-12  rounded-full items-center justify-center">
          <Image source={avater} className="w-full h-full object-cover" />
        </View>
      </View>
      <View
        style={style.shadow}
        className={`flex-row items-center bg-white mx-4 rounded-xl py-1 px-1  mt-4 `}
      >
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "AIzaSyDWpuVw2apN-XgX3gmrzshrzgr1AG4sCxQ",
            language: "en",
          }}
        />
      </View>
      {isLoading ? (
        <View className="flex-1 items-center justify-center ">
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer
              imageSrc={hotel}
              title="hotel"
              type={type}
              setType={setType}
            />
            <MenuContainer
              imageSrc={attraction}
              title="attraction"
              setType={setType}
              type={type}
            />
            <MenuContainer
              setType={setType}
              imageSrc={restaurants}
              title="restaurants"
              type={type}
            />
          </View>
          <View>
            <View className="flex-row justify-between items-center px-8 mt-8">
              <Text className="text-[#4488bf] font-bold text-[28px]">
                Top Tips{" "}
              </Text>
              <TouchableOpacity className="flex-row justify-center items-center gap-2">
                <Text className="text-2xl text-[#6dcd6d] font-semibold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#b7e39f"
                />
              </TouchableOpacity>
            </View>
            <View className="px-4 mt-10 flex-row flex-wrap items-center justify-between  ">
              {mainDate?.length > 0 ? (
                <>
                  <ItemCardContainer
                    title={"iasdfasdfasffl sa dfj"}
                    location="asdf lkasd"
                    imageSrc="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
                  />

                  <ItemCardContainer
                    title={"iadfasflasdjfl sa dfj"}
                    location="asdf  lkasd"
                    imageSrc="https://images.unsplash.com/photo-1646571751188-128c1cdb9cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  />
                  <ItemCardContainer
                    title={"iasdfasdfasfll sa dfj"}
                    location="asdf, asdf  "
                    imageSrc="https://images.unsplash.com/photo-1668402786143-1c81c818e315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  />
                  <ItemCardContainer
                    title={"iasdfasdjfl sa dfj"}
                    location="damitta, Egypt  "
                    imageSrc="https://images.unsplash.com/photo-1648383596562-4d34138924fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  />
                  <ItemCardContainer
                    title={"iasdfa sa dfj"}
                    location="giza, egypt"
                    imageSrc="https://images.unsplash.com/photo-1643890202841-e113daa720ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  />
                  <ItemCardContainer
                    title={"iasdfasdf"}
                    location="cairo, egypt"
                    imageSrc="https://images.unsplash.com/photo-1655127664148-a768d7f678c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  />
                </>
              ) : (
                <View className="w-full h-[400px] items-center space-x-8 justify-center  ">
                  <Image source={notfound} className="w-40 h-40 object-cover" />

                  <Text className="text-2xl text-[#41b666] mt-5 font-semibold">
                   
                    Opps ... No Data Found
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
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
