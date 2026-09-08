import { Link } from "expo-router";
import { Text, View } from "react-native";

const sign_in = () => {
  return (
    <View>
      <Text>signIn</Text>
      <Link
        href="/(auth)/sign_up"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Create Account
      </Link>
    </View>
  );
};

export default sign_in;
