import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

import { COLORS, FONTS } from "../constants";

interface Props {
  label: string;
  buttonContainerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  onPress: () => void;
}

const TextButton = ({
  buttonContainerStyle,
  label,
  labelStyle,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
