import { Text, TouchableOpacity } from "react-native";

export default function CustomButton({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      {IconLeft && <IconLeft />}
      <Text>{title}</Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
}
