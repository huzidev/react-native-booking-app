import { ButtonProps } from "@/types/type";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const textVariantStyles: Record<string, string> = {
  primary: "text-black",
  secondary: "text-gray-100",
  danger: "text-red-100",
  success: "text-green-100",
  default: "text-white",
};

const bgVariantStyles: Record<string, string> = {
  secondary: "bg-gray-500",
  danger: "bg-red-500",
  success: "bg-green-500",
  outline: "bg-transparent border-neutral-300 border-[0.5px]",
  primary: "bg-[#0286FF]",
};

const getTextVariantStyle = (variant: string = "default") =>
  textVariantStyles[variant] || textVariantStyles.default;

const getBgVariantStyle = (variant: string = "primary") =>
  bgVariantStyles[variant] || bgVariantStyles.primary;

export default function CustomButton({
  onPress,
  title,
  bgVariant = "primary", // by-default
  textVariant = "default", // by-default
  isLoading,
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          {IconLeft && <IconLeft />}

          <Text
            className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}
          >
            {title}
          </Text>

          {IconRight && <IconRight />}
        </>
      )}
    </TouchableOpacity>
  );
}
