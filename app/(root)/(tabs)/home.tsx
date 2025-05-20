import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView className="bg-general-500">
      <Text>This is Home page</Text>
    </SafeAreaView>
  );
}