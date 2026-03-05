import { theme } from "@/styles/theme";
import { TextInput, View, TextInputProps } from "react-native";
import { MageIcon } from "../icons/MageIcons";
import { styles } from "./styles";
import { useState } from "react";

type IconName = React.ComponentProps<typeof MageIcon>["name"];
type InputVariant = "empty" | "filled" | "danger";

interface InputProps extends TextInputProps {
  icon?: IconName;
  variant?: InputVariant;
}

export default function Input({
  icon,
  variant = "empty",
  style,
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const getIconColor = () => {
    if (variant === "danger") return theme.colors.dangerBase;
    if (isFocused) return theme.colors.purpleBase;
    if (variant === "filled") return theme.colors.gray700;
    return theme.colors.gray600;
  };

  const getTextColor = () => {
    if (variant === "danger") return theme.colors.dangerBase;
    if (isFocused) return theme.colors.gray700;
    return theme.colors.gray700;
  };

  return (
    <View
      style={[
        styles.container,
        styles[variant],
        isFocused && styles.borderFocused,
        variant === "danger" && styles.borderDanger,
        style,
      ]}
    >
      {icon && <MageIcon name={icon} color={getIconColor()} size={20} />}

      <TextInput
        {...props}
        style={[styles.input, { color: getTextColor() }]}
        placeholderTextColor={
          variant === "danger" ? theme.colors.dangerBase : theme.colors.gray600
        }
        onFocus={(e) => {
          setIsFocused(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          if (onBlur) onBlur(e);
        }}
      />
    </View>
  );
}
