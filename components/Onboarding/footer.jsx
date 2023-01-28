import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { slides } from "../../assets/onboardData";

const {  height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff" };

export const Footer = ({ currentSlide, skip ,goNextslide}) => {
    const navigation = useNavigation();
  
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          {slides.map((i, index) => (
            <View
              key={index}
              style={[
                style.indicator,
                currentSlide == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View>
          <View style={{ marginTop: 70, marginBottom: 30 }}>
            {currentSlide == slides.length - 1 ? (
              <View>
                <TouchableOpacity
                  style={[style.btn2]}
                  onPress={() => navigation.replace("Home")}
                >
                  <Text style={style.TextBtn}>get start</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={skip}
                  style={[
                    style.btn,
                    {
                      backgroundColor: COLORS.primary,
                      borderWidth: 1,
                      borderColor: COLORS.white,
                    },
                  ]}
                >
                  <Text style={[style.TextBtn, { color: COLORS.white }]}>
                    Skip
                  </Text>
                </TouchableOpacity>
                <View style={{ width: 15 }} />
                <TouchableOpacity style={style.btn} onPress={goNextslide}>
                  <Text style={style.TextBtn}>next</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };


  const style = StyleSheet.create({

    btn: {
      backgroundColor: COLORS.white,
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    btn2: {
      backgroundColor: COLORS.white,
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    TextBtn: {
      fontWeight: "bold",
      fontSize: 18,
    },
  });
  