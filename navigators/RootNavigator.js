import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import CustomBackButton from "../components/CustomBackButton";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
      <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen>
      <Stack.Screen
        name="Subscribe"
        component={SubscribeScreen}
        options={{
          headerLeft: () => <CustomBackButton />,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default RootNavigator;
