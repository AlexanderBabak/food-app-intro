import React from "react";
import { Text, View } from "react-native";

import { COLORS } from "../../constants";

export const MainScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
      }}
    >
      <Text>Hello</Text>
    </View>
  );
};
