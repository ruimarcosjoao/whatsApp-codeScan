import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Page() {
  return (
    <View className={styles.container}>
      <View className={styles.main}>
        <View>
          <Text className={styles.title}>Hello World</Text>
          <Text className={styles.subtitle}>This is the first page of your app.</Text>
        </View>
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <TouchableOpacity className={styles.button}>
            <Text className={styles.buttonText}>Show Details</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
  container: 'flex-1 p-6',
  main: 'flex-1 max-w-[960] justify-between',
  title: 'text-[64px] font-bold',
  subtitle: 'text-4xl text-gray-700',
};
