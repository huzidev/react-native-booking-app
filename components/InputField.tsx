import { InputFieldProps } from "@/types/type";
import { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  Platform,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from "react-native";

export default function InputField({
  label,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) {
  const [isSecure, setIsSecure] = useState<boolean>(secureTextEntry);

  return (
    // KeyboardAvoidingView Adjust the UI of page when keyboard is open
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500  ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={isSecure}
              {...props}
            />

            {secureTextEntry && (
              <TouchableOpacity
                onPress={() => setIsSecure(!isSecure)}
                className="px-4"
              >
                {isSecure ? (
                  <Text>
                    Show
                  </Text>
                ) : (
                  <Text>
                    Hide
                  </Text>
                )}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
