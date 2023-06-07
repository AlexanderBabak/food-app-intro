import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { MutableRefObject } from "react";
import { Animated, StyleSheet, View } from "react-native";

import { TextButton } from "../../../components";
import { COLORS, constants, SIZES } from "../../../constants";
import { RootStackParamList } from "../../../types/navigation";
import { Dots } from "./index";

interface Props {
  scrollX: Animated.Value;
  currentIndex: number;
  flatListRef: MutableRefObject<null>;
}
const Footer: React.FC<Props> = ({ scrollX, currentIndex, flatListRef }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.mainContainer}>
      {/*Pagination*/}
      <View style={styles.dotsContainer}>
        <Dots scrollX={scrollX} />
      </View>

      {/*Buttons*/}
      {currentIndex < constants.onboarding_screens.length - 1 && (
        <View style={styles.buttonsContainer}>
          <TextButton
            label="Skip"
            buttonContainerStyle={{ backgroundColor: undefined }}
            labelStyle={{ color: COLORS.darkGray2 }}
            onPress={() => navigation.replace("Main")}
          />

          <TextButton
            label="Next"
            buttonContainerStyle={{
              height: 60,
              width: 200,
              borderRadius: SIZES.radius,
            }}
            onPress={() => {
              // @ts-ignore
              flatListRef?.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
              });
            }}
          />
        </View>
      )}

      {currentIndex === constants.onboarding_screens.length - 1 && (
        <View style={styles.buttonContainer}>
          <TextButton
            label="Let`s Get Started"
            buttonContainerStyle={{ height: 60, borderRadius: SIZES.radius }}
            onPress={() => navigation.replace("Main")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 160,
  },
  dotsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.padding,
    marginVertical: SIZES.padding,
  },
  buttonContainer: {
    paddingHorizontal: SIZES.padding,
    marginVertical: SIZES.padding,
  },
});

export default Footer;
