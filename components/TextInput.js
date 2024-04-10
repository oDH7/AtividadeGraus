import React from "react";
import { TextInput } from "react-native";
import { styles } from "../styles/Style";

const TextInput = ({ value, onChangeText, placeholder, keyboardType }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
    />
  );
};

export default TextInput;
