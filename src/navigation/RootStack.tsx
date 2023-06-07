import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { MainScreen } from "../screens/Main/MainScreen";
import { OnBoardingScreen } from "../screens/OnBoarding/OnBoardingScreen";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};
