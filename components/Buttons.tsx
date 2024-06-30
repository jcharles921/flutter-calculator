import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";

interface ButtonProps {
  onPress: () => void;
  text: string;
  size?: "double";
  theme?: "secondary" | "accent";
}

const Button: React.FC<ButtonProps> = ({ onPress, text, size, theme }) => {
  const buttonStyles: ViewStyle[] = [styles.button];
  const textStyles: TextStyle[] = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonDouble: {
    width: Dimensions.get("window").width / 2 - 20, // Example width calculation
  },
  buttonSecondary: {
    backgroundColor: "gray",
  },
  buttonAccent: {
    backgroundColor: "orange",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  textSecondary: {
    color: "black",
  },
});

export default Button;
