import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function onBoarding() {
  return (
    <SafeAreaView className='flex h-full items-center justify-center bg-white'>
      <Text>This is welcome page</Text>
    </SafeAreaView>
  );
}