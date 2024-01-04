import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, MoreVertical, Search, ZoomIn } from "lucide-react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          header: (props) => (
            <SafeAreaView className="h-20 flex-row bg-slate-900 px-4 justify-between items-center">
              <Text className="text-white font-normal text-xl capitalize">whatApp</Text>
              <View className="flex-row gap-5 justify-normal items-center">
                <Pressable>
                  <Camera size={21} strokeWidth={2} color="#fff" />
                </Pressable>
                <Pressable>
                  <Search size={21} strokeWidth={2} color="#fff" />
                </Pressable>
                <Pressable>
                  <MoreVertical size={21} strokeWidth={2} color="#fff" />
                </Pressable>
              </View>
            </SafeAreaView>
          ),
        }}
      ></Stack>
    </ThemeProvider>
  );
}
