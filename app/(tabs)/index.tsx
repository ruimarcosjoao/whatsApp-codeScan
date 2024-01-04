import { Pressable, StyleSheet, Text, View  } from 'react-native';
import useStory from '../../services/useStory';
import WhatsApp from '../../components/WhatsAppList';

export default function TabOneScreen() {
  const {count, increment, decrement} = useStory()

  return (
    <WhatsApp/>
  );
}