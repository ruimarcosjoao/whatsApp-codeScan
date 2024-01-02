import { Feather } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Layout() {
  const router = useRouter();

  const BackButton = () => (
    <TouchableOpacity onPress={router.back}>
      <View className={styles.backButton}>
        <Feather name="chevron-left" size={16} color="#007AFF" />
        <Text className={styles.backButtonText}>Back</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Overview' }} />
      <Stack.Screen
        name="details"
        options={{ title: 'Details', headerLeft: () => <BackButton /> }}
      />
    </Stack>
  );
}

const styles = {
  backButton: 'flex-row',
  backButtonText: 'text-blue-500 ml-1',
};
