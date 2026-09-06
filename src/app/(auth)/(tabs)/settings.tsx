import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView as RNSafeAreaVoew } from "react-native-safe-area-context";
import { styled } from 'nativewind';
const SafeAreaView = styled(RNSafeAreaVoew);

const settings = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>settings</Text>
    </SafeAreaView>
  )
}

export default settings