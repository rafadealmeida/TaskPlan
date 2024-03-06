import FontAwesome from '@expo/vector-icons/FontAwesome';
import { GluestackUIProvider} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import auth from "@react-native-firebase/auth";


export {
  ErrorBoundary,
} from 'expo-router';

const user = auth().currentUser;

export const unstable_settings = {
  initialRouteName: user ? '(tabs)':'/',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
  // const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider config={config}>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </GluestackUIProvider>
  );
}
