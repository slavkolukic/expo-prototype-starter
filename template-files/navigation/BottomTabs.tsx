import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

type BottomTabParamList = {
  Dashboard: undefined;
  Profile: undefined;
};

const Tabs = createBottomTabNavigator<BottomTabParamList>();

const DefaultScreen = () => null;

export const BottomTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Dashboard" component={DefaultScreen} />
      <Tabs.Screen name="Profile" component={DefaultScreen} />
    </Tabs.Navigator>
  );
};
