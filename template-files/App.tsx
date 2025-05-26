import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { RootStackNavigator } from "./source/navigation";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import { colors } from "./source/constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    secondary: colors.accent,
    background: colors.background,
    surface: colors.surface,
    text: colors.textPrimary,
    error: colors.error,
    outline: colors.border,
    onSurface: colors.textSecondary,
  },
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <RootStackNavigator />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
