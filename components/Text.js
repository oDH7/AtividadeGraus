import React from "react";
import { Text } from "react-native";
import { styles } from "../styles/Style";

const Text = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default Text;
