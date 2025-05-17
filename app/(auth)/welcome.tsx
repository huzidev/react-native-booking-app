import { router } from "expo-router";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Swiper from "react-native-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

export default function onBoarding() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  return (
    <SafeAreaView className="flex h-full items-center justify-center">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="w-full justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        onIndexChanged={(i) => setActiveIndex(i)}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
      >
        {onboarding.map(({ id, title, image, description }) => (
          <View key={id} className="flex items-center justify-center p-5">
            <Image
              source={image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl mx-10 text-center font-JakartaBold">
                {title}
              </Text>
            </View>
            <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton 
        title="Next"
        className="w-11/12 mt-10"
      />
    </SafeAreaView>
  );
}
