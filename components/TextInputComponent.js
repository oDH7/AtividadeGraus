import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../styles/Style';

export default function TextInputComponent(props) {
  return (
    <TextInput style={styles.input} {...props} />
  );
}
