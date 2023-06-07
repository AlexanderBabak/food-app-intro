import React from "react";
import { Animated, StyleSheet, View } from "react-native";

import { COLORS, constants, SIZES } from "../../../constants";

interface Props {
  scrollX: Animated.Value;
}

const Dots: React.FC<Props> = ({ scrollX }) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <View style={styles.container}>
      {constants.onboarding_screens.map((item, index) => {
        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
          extrapolate: "clamp",
        });

        const dotWidth = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [10, 30, 10],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={`dot-${index}`}
            style={{
              borderRadius: 5,
              marginHorizontal: 6,
              width: dotWidth,
              height: 10,
              backgroundColor: dotColor,
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Dots;
