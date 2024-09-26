/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { LightPalette, DarkPalette } from './Palette';

export const Colors = {
  light: {
    text: LightPalette.text,
    background: LightPalette.background,
    tint: LightPalette.primary,
    tabIconDefault: LightPalette.textLight,
    tabIconSelected: LightPalette.primary,
  },
  dark: {
    text: DarkPalette.text,
    background: DarkPalette.background,
    tint: DarkPalette.primary,
    tabIconDefault: DarkPalette.textLight,
    tabIconSelected: DarkPalette.primary,
  },
};