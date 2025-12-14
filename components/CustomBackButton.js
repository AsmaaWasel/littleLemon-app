import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CustomBackButton() {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("Welcome")}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <Ionicons name="arrow-back" size={22} color="#000" />
      <Text style={{ marginLeft: 6 }}>Welcome</Text>
    </Pressable>
  );
}
