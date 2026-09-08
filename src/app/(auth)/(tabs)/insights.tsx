import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView as RNSafeAreaVoew } from "react-native-safe-area-context";
import { styled } from 'nativewind';
const SafeAreaView = styled(RNSafeAreaVoew);
const insights = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>insights</Text>
    </SafeAreaView>
  )
}

export default insights