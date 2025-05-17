import { useState } from 'react';
import { View, Text } from 'react-native'

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <View>
      <Text>This is signin page</Text>
    </View>
  )
}