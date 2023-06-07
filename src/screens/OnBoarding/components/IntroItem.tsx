import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { COLORS, FONTS, SIZES } from "../../../constants";
import { OnboardingScreen } from "../../../types/interfaces";

interface Props {
  item: OnboardingScreen;
  index: number;
}

const IntroItem: React.FC<Props> = ({ item, index }) => {
  const style = styles(index);

  return (
    <View style={style.mainContainer}>
      {/*Header*/}
      <View style={style.headerContainer}>
        <ImageBackground
          source={item.backgroundImage}
          style={style.backgroundContainer}
        >
          <Image
            source={item.bannerImage}
            resizeMode="contain"
            style={style.image}
          />
        </ImageBackground>
      </View>

      {/*Detail*/}
      <View style={style.detailContainer}>
        <Text style={style.title}>{item.title}</Text>
        <Text style={style.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = (index: number) =>
  StyleSheet.create({
    mainContainer: {
      width: SIZES.width,
    },
    headerContainer: {
      flex: 3,
    },
    backgroundContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
      height:
        index === 1 ? (Platform.OS === "android" ? "87%" : "92%") : "100%",
      width: "100%",
    },
    image: {
      width: SIZES.width * 0.8,
      height: SIZES.width * 0.8,
      marginBottom: -SIZES.padding,
    },
    detailContainer: {
      flex: 1,
      marginTop: 30,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: SIZES.radius,
    },
    title: {
      ...FONTS.h2,
      fontSize: 25,
    },
    description: {
      marginTop: SIZES.radius,
      textAlign: "center",
      color: COLORS.darkGray,
      paddingHorizontal: SIZES.padding,
      ...FONTS.body3,
    },
  });

export default IntroItem;
