import { Text, TouchableOpacity } from "react-native";

export default function CustomButton({
    onPress,
    title,
}) {
  return (
    <TouchableOpacity
        onPress={onPress}
    >
        <Text>
            {title}
        </Text>
    </TouchableOpacity>
  )
}