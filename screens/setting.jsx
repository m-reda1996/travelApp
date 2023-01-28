import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SECTIONS = [
  {
    header: "Preferences",
    icon: "settings",
    items: [
      { icon: "globe", color: "#fe9400", label: "Language", type: "link" },
      {
        icon: "moon",
        color: "#007afe",
        label: "Dark Mode",
        value: false,
        type: "boolean",
      },
      {
        icon: "wifi",
        color: "#007afe",
        label: "Use Wi-Fi",
        value: true,
        type: "boolean",
      },
      { icon: "location", color: "#32c759", label: "Location", type: "link" },
      {
        icon: "users",
        color: "#32c759",
        label: "Show collaborators",
        value: true,
        type: "boolean",
      },
      {
        icon: "airplay",
        color: "#fd2d54",
        label: "Accessibility mode",
        value: false,
        type: "boolean",
      },
    ],
  },
  {
    header: "Help",
    icon: "help-circle",
    items: [
      { icon: "flag", color: "#8e8d91", label: "Report Bug", type: "link" },
      { icon: "mail", color: "#007afe", label: "Contact Us", type: "link" },
    ],
  },
  {
    header: "Content",
    icon: "align-center",
    items: [
      { icon: "save", color: "#32c759", label: "Saved", type: "link" },
      { icon: "download", color: "#fd2d54", label: "Downloads", type: "link" },
    ],
  },
];
export const Setting = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={style.container}>
        <View style={style.profile}>
          <TouchableOpacity>
            <View style={style.profileAvatarWrapper}>
              <Image
                style={style.profileImage}
                source={{
                  uri: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                }}
              />
              <TouchableOpacity>
                <View style={style.profileAction}>
                  <EvilIcons name="pencil" size={34} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <Text style={style.name}>mahmoud reda</Text>
          <Text style={style.address}>Egypt , Damitta </Text>
        </View>
        {SECTIONS.map(({ header, items }) => (
          <View key={header} style={style.section}>
            <Text style={style.sectionHeader}>{header}</Text>
            {items.map(({ label, icon, type, value, color }, index) => {
              return (
                <TouchableOpacity
                  key={label}
                  onPress={() => {
                    // handle onPress
                  }}
                >
                  {/* <div style={{'backgroundColor': status === 'approved' ? 'blue' : status === 'pending' ? 'black' : 'red'}}></div> */}
                  <View style={style.row}>
                    <View style={[style.rowIcon, { backgroundColor: color }]}>
                      {icon == "users" ? (
                        <Feather name="users" size={24} color="black" />
                      ) : icon == "airplay" ? (
                        <Feather name="airplay" size={20} color="white" />
                      ) : (
                        <Ionicons color="#fff" name={icon} size={18} />
                      )}
                    </View>

                    <Text style={style.rowLabel}>{label}</Text>

                    <View style={style.rowSpacer} />

                    {type === "boolean" && <Switch value={value} />}

                    {type === "link" && (
                      <EvilIcons
                        color="#0c0c0c"
                        name="chevron-right"
                        size={22}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  profileImage: {
    width: 90,
    height: 90,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 155,
  },
  container: {
    paddingHorizontal: 24,
  },
  profile: {
    padding: 24,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileIcon: {
    backgroundColor: "green",
  },
  profileAvatarWrapper: {
    position: "relative",
  },
  profileAction: {
    position: "absolute",
    right: 5,
    bottom: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: "white",
  },
  name: {
    marginTop: 20,
    fontWeight: "500",
    fontSize: 24,
  },
  address: {
    fontWeight: "500",
    fontSize: 18,
    marginTop: 8,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: "600",
    color: "#9e9e9e",
    textTransform: "uppercase",
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "400",
    color: "#0c0c0c",
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
