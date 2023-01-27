import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { slides } from "../assets/onboardData";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff" };

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item.image}
        style={{
          height: "75%",
          width,
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
        }}
      />
      <Text style={style.title}>{item.title}</Text>
      <Text style={style.subTitle}>{item.subtitle}</Text>
    </View>
  );
};

export const Onboarding = ({ navigation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);
  const Footer = () => {
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
                <TouchableOpacity style={[style.btn2]}           onPress={() => navigation.navigate('Home')}>
                  <Text style ={style.TextBtn}>get start</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={[
                    style.btn,
                    {
                      backgroundColor: COLORS.primary,
                      borderWidth: 1,
                      borderColor: COLORS.white,
                    },
                  ]}
                >
                  <Text
                    style={[style.TextBtn, { color: COLORS.white }]}
                    onPress={skip}
                  >
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

  const updateCurrentSildeIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlide(currentIndex);
  };
  const goNextslide = () => {
    const nextSlideIndex = currentSlide + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlide(nextSlideIndex);
    }
  };
  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlide(lastSlideIndex);
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={"light-content"} />
      <FlatList
        ref={ref}
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSildeIndex}
        renderItem={({ item }) => <Slide item={item} />}
      />

      <Footer />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subTitle: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    maxWidth: "80%",
    textAlign: "center",
    lineHeight: 25,
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "gray",
    marginHorizontal: 3,
  },
  btn: {
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flex : 1
  },
  btn2 : {
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
