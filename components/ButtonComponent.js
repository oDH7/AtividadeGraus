import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/Style';

export default function ButtonComponent({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
