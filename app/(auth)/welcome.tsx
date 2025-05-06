import { router } from "expo-router";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import { onBoardingData } from "@/constants";

export default function onBoarding() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
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
      >
        {onBoardingData.map((item) => (
          <View>
            <Text>
              {item.title}
            </Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
}
