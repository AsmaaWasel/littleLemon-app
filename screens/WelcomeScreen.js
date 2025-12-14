import * as React from "react";
import { View, Image, Text, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>
          Little Lemon,your local Miditerranean Bistro
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 80,
  },
  text: {
    fontSize: 21,
    textAlign: "center",
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  button: {
    width: 300,
    height: 50, 
    backgroundColor: "#4a5f58",
    borderRadius: 8,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
};
