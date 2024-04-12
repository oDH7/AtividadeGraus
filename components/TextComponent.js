import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/Style';

export default function TextComponent({ text }) {
  return (
    <Text style={styles.text}>{text}</Text>
  );
}
