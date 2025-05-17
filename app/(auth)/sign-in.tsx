import { images } from '@/constants';
import { useState } from 'react';
import { View, Text, ScrollView, Image } from "react-native";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}