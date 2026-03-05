import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

import { MageIcon } from "@/components/icons/MageIcons";

interface CheckProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  variant?: "checkbox" | "radio";
}

export default function Check({
  label,
  checked,
  onChange,
  variant = "checkbox",
}: CheckProps) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => onChange(!checked)}
      accessibilityRole={variant}
      accessibilityState={{ checked }}
    >
      <View
        style={[
          styles.box,
          styles[variant],
          checked &&
            (variant === "checkbox"
              ? styles.checkboxChecked
              : styles.radioChecked),
        ]}
      >
        {checked && variant === "checkbox" && (
          <MageIcon name="check" color="#FFFFFF" size={16} />
        )}
        {checked && variant === "radio" && <View style={styles.radioInner} />}
      </View>

      {/* Renderiza o texto se a prop label for passada */}
      {label && <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );
}
