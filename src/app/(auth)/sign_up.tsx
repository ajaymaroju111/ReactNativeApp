import { Link } from "expo-router";
import { Text, View } from "react-native";

const sign_in = () => {
  return (
    <View>
      <Text>signUp</Text>
      <Link
        href="/(auth)/sign_in"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Sign In
      </Link>
    </View>
  );
};

export default sign_in;
