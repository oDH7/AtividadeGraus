import React, { useState } from 'react';
import { View } from 'react-native';
import TextComponent from '../components/TextComponent';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';
import { styles } from '../styles/Style';

export default function ConversorComponent() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const Convert = () => {
    if (celsius !== '' && !isNaN(celsius)) {
      const result = (parseFloat(celsius) * 9/5) + 32;
      setFahrenheit(result.toFixed(2));
    }
  };

  const Clear = () => {
    setCelsius('');
    setFahrenheit('');
  };

  return (
    <View style={styles.container}>
      <TextComponent text="Celsius" />
      <TextInputComponent
        value={celsius}
        onChangeText={(text) => setCelsius(text)}
      />
      <TextComponent text="Fahrenheit" />
      <TextInputComponent
        value={fahrenheit}
        onChangeText={(text) => setFahrenheit(text)}
        editable={false}
      />
      <ButtonComponent text="Converter" onPress={Convert} />
      <ButtonComponent text="Limpar" onPress={Clear} />
    </View>
  );
}
