import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import OAuth from '@/components/OAuth';
import { icons, images } from '@/constants';
import { useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native'

enum VerificationState {
  DEFAULT = "default",
  PENDING = "pending",
  SUCCESS = "success",
  FAILED = "failed",
}

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [verification, setVerification] = useState({
    state: VerificationState.DEFAULT,
    error: "",
    email: ""
  });

  const { name, email, password, confirmPassword } = form;

  function onSignUp() {
    if (!isLoaded) return;

    if (password !== confirmPassword) {
      setVerification({
        ...verification,
        state: VerificationState.FAILED,
        error: "Password does not match",
      });
    }
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <InputField
            label="Confirm Password"
            placeholder="Confirm password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={confirmPassword}
            onChangeText={(value) =>
              setForm({ ...form, confirmPassword: value })
            }
          />

          <CustomButton title="Sign Up" onPress={onSignUp} className="mt-6" />

          <OAuth />

          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            Already have an account?{" "}
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}