import React, { useRef, useState } from "react";
import { Animated, ListRenderItem, View } from "react-native";

import { COLORS, constants } from "../../constants";
import { OnboardingScreen } from "../../types/interfaces";
import { Footer, IntroItem, Logo } from "./components";

type ViewableItems = {
  viewableItems: Array<any>;
};

const renderItem: ListRenderItem<OnboardingScreen> = ({ item, index }) => (
  <IntroItem item={item} index={index} />
);

export const OnBoardingScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewChangeRef = useRef(({ viewableItems }: ViewableItems) => {
    setCurrentIndex(viewableItems[0].index);
  });

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Logo />

      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={item => `${item.id}`}
        data={constants.onboarding_screens}
        renderItem={renderItem}
      />

      <Footer
        scrollX={scrollX}
        currentIndex={currentIndex}
        flatListRef={flatListRef}
      />
    </View>
  );
};
