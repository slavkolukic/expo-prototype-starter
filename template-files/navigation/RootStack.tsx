import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabs } from "./BottomTabs";

export type RootStackParamList = {
  BottomTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const SCREEN_OPTIONS = {
  headerShown: false,
};

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};
