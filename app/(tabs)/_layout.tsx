import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, withLayoutContext } from "expo-router";
import { Pressable, Text, useColorScheme } from "react-native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";

const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

import Colors from "../../constants/Colors";
import useStory from "../../services/useStory";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

export default function TabLayout() {
  const { count } = useStory();
  const colorScheme = useColorScheme();

  return (
    <MaterialTopTabs screenOptions={{tabBarLabelStyle: {fontSize: 10, fontWeight: '700', color: '#4ade80'}, tabBarStyle: {backgroundColor: '#0f172a'}, tabBarIndicatorStyle: {backgroundColor: '#4ade80', height: 3, borderRadius: 1.5}}}>
      <MaterialTopTabs.Screen name="index" options={{ title: "Conversas" }} />
      <MaterialTopTabs.Screen name="two" options={{ title: "Leitor qr code" }} />
      <MaterialTopTabs.Screen name="group" options={{ title: "Chamadas" }} />
      {/*<Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerRight: () => (
              <>
                <Pressable>
                  <Text className="text-white text-xl font-bold mr-3">
                    {count}
                  </Text>
                </Pressable>
              </>
            ),
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: "Configurações",
            tabBarIcon: () => <></>,
          }}
        />
      </Tabs>*/}
    </MaterialTopTabs>
  );
}
