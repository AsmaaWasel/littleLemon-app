import * as React from "react";
import { View, Image, Text, Pressable, Alert, TextInput } from "react-native";

const SubscribeScreen = () => {
  const handleSubscribe = () => {
    console.log("Button pressed");
    Alert.alert("Subscribed!", "Thank you for subscribing to our newsletter.", [
      { text: "OK" },
    ]);
  };
  console.log("SubscribeScreen rendered");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        style={styles.logo}
      />

      <Text style={styles.text}>
        Subscribe to our Newsletter for our latest delicious recipes!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Type your email"
        keyboardType="email-address"
      />

      <Pressable style={styles.button} onPress={handleSubscribe}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;
const styles = {
  container: {
    flex: 1,
    alignItems: "center",
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
    height: 50,
    backgroundColor: "#4a5f58",
    borderRadius: 8,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
};
