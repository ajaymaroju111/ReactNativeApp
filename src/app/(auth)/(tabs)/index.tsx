import { Link } from "expo-router";
import {styled} from 'nativewind'
import { Text, View } from "react-native";
import "../../../../global.css";
import { SafeAreaView as RNSafeAreaVoew } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaVoew);
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">
        Go to onboarding
      </Link>
      <Link href="/(auth)/sign_in" className="mt-4 rounded bg-primary text-white p-4">
        Go to sign in
      </Link>
      <Link href="/(auth)/sign_up" className="mt-4 rounded bg-primary text-white p-4">
        Go to sign up
      </Link>
      <Link href="/subscriptions/spotify" className="mt-4 rounded bg-primary text-white p-4">
        Go to Spotify Subscriptions
      </Link>
      <Link href={{
        pathname : "/subscriptions/[id]",
        params : {id : "claude"}
      }} className="mt-4 rounded bg-primary text-white p-4">
        Claud Max Subscription
      </Link>
    </SafeAreaView>
  );
}
