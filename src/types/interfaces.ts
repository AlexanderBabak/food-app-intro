import { ImageSourcePropType } from "react-native";

export interface OnboardingScreen {
  id: number;
  backgroundImage: ImageSourcePropType;
  bannerImage: ImageSourcePropType;
  title: string;
  description: string;
}
