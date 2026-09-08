import { Link } from "expo-router";
import { styled } from "nativewind";
import { Image, Text, View } from "react-native";
import "../../../../global.css";
import { SafeAreaView as RNSafeAreaVoew } from "react-native-safe-area-context";
import images from "../../../../constants/images";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "../../../../constants/data";
import { icons } from "../../../../constants/icons";
import { formatCurrency } from "../../../../libs/utils";
import dayjs from "dayjs";
import ListHeading from "../../../../components/ListHeading";
import UpcommingSubscriptionCard from "../../../../components/UpcommingSubscriptionCard";
import { FlatList } from "react-native";
import SubscriptionCard from "../../../../components/SubscriptionCard";
import { useState } from "react";

const SafeAreaView = styled(RNSafeAreaVoew);
export default function App() {
  const [expandedSubscription, setSubscriptionExpanded] = useState<
    string | null
  >(null);
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
        <FlatList
          ListHeaderComponent={
            <>
              <View className="home-header">
                <View className="home-user">
                  <Image source={images.avatar} className="home-avatar" />
                  <Text className="home-user-name">{HOME_USER.name}</Text>
                </View>
                <Image source={icons.add} className="home-add-icon" />
              </View>

              <View className="home-balance-card">
                <Text className="home-balance-label">Total Balance</Text>
                <View className="home-balance-row">
                  <Text className="home-balance-amount">
                    {formatCurrency(HOME_BALANCE.amount, )}
                  </Text>
                  <Text className="home-balance-date">
                    {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                  </Text>
                </View>
              </View>

              <View className="mb-5">
                <ListHeading title="Upcoming" />
                {/* <UpcommingSubscriptionCard data={UPCOMING_SUBSCRIPTIONS[0]} /> */}
                <FlatList
                  data={UPCOMING_SUBSCRIPTIONS}
                  renderItem={({ item }) => (
                    <UpcommingSubscriptionCard {...item} />
                  )}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={
                    <Text className="home-empty-state">
                      No upcoming renewals yet.
                    </Text>
                  }
                />
              </View>

              <ListHeading title="All Subscriptions" />
            </>
          }
          data={HOME_SUBSCRIPTIONS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SubscriptionCard
              {...item}
              expanded={expandedSubscription === item.id}
              onPress={() =>
                setSubscriptionExpanded(
                  expandedSubscription === item.id ? null : item.id,
                )
              }
            />
          )}
          extraData={expandedSubscription}
          ItemSeparatorComponent={() => <View className="h-4" />}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <Text className="home-empty-state">No subscriptions yet.</Text>
          }
          showsVerticalScrollIndicator={false}
          contentContainerClassName="pb-30"
        />
    </SafeAreaView>
  );
}
