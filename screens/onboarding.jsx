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
import { Footer } from "../components/Onboarding/footer";
import { Slide } from "../components/Onboarding/slide";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff" };

export const Onboarding = ({ navigation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);

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
        pagingEnabled
        bounces={false}
        ref={ref}
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSildeIndex}
        renderItem={({ item }) => <Slide item={item} />}
      />

      <Footer currentSlide={currentSlide} skip={skip} goNextslide={goNextslide} />
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
