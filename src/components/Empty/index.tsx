import { theme } from "@/styles/theme";
import { Text, View } from "react-native";

export default function Empty({ message }: { message: string }) {
  return (
    <Text
      style={{
        textAlign: "center",
        ...theme.typography.textSm,
        color: theme.colors.gray500,
      }}
    >
      {message}
    </Text>
  );
}
