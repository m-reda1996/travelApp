import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");
const COLORS = { primary: "#282534", white: "#fff" };

export const Slide = ({ item }) => {
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

  });
  