import * as React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { TextInput } from "react-native-web";

const SubscribeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>
        Subscribe to our Newsletter for our latest delicious recipes!
      </Text>
      <TextInput style={styles.input} placeholder="Type your email" />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 10,
  },
  button: {
    width: 300,
    height: 50, // خليها كافية للزرار
    backgroundColor: "#4a5f58",
    borderRadius: 8,
    marginTop: 50,
    justifyContent: "center", // مهم! يحط النص في النص عموديًا
    alignItems: "center", // مهم! يحط النص في النص أفقيًا
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 2,
    borderColor: "#4a5f58",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
    fontSize: 16,
  },
  button: {
    width: 300,
    height: 50, // خليها كافية للزرار
    backgroundColor: "#4a5f58",
    borderRadius: 8,
    marginTop: 20,
    justifyContent: "center", // مهم! يحط النص في النص عموديًا
    alignItems: "center", // مهم! يحط النص في النص أفقيًا
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
};
