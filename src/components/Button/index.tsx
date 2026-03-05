import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { theme } from "@/styles/theme";
import { MageIcon } from "@/components/icons/MageIcons";

type IconName = React.ComponentProps<typeof MageIcon>["name"];

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  variant?: ButtonVariant;
  icon?: IconName;
}

export default function Button({
  label,
  variant = "primary",
  icon,
  style,
  ...props
}: ButtonProps) {
  const iconColor = {
    primary: theme.colors.gray100,
    secondary: theme.colors.purpleBase,
    danger: theme.colors.dangerBase,
  }[variant];

  const textStyle =
    styles[
      `text${
        variant.charAt(0).toUpperCase() + variant.slice(1)
      }` as keyof typeof styles
    ];

  return (
    <TouchableOpacity
      style={[styles.container, styles[variant], style]}
      activeOpacity={0.7}
      {...props}
    >
      {icon && <MageIcon name={icon} color={iconColor} size={24} />}
      {label && <Text style={[styles.text, textStyle]}>{label}</Text>}
    </TouchableOpacity>
  );
}
