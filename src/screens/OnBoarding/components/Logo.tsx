import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { images, SIZES } from "../../../constants";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={images.logo_02}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: SIZES.height > 800 ? 50 : 25,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: SIZES.width * 0.5,
    height: 100,
  },
});

export default Logo;
