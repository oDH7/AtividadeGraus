import React, { useState } from "react";
import { View } from "react-native";
import Text from "../components/Text";
import TextInput from "../components/TextInput";
import { styles } from "./styles";

const Conversor = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const convertToCelsius = (celsiusValue) => {
    return (celsiusValue * 9) / 5 + 32;
  };
  const celsiusValue = parseFloat(celsius);
  const fahrenheitValue = convertToCelsius(celsiusValue).toFixed(2);
  setFahrenheit(fahrenheitValue);
  setCelsius("");
};

return (
  <View style={styles.container}>
    <TextInput
      value={celsius}
      onChangeText={(text) => setCelsius(text)}
      placeholder="Digite a temperatura em Celsius"
      keyboardType="numeric"
    />
    <Text style={styles.button} onPress={handleConversion}>
      Converter para Fahrenheit
    </Text>
    {fahrenheit !== "" && (
      <Text style={styles.result}>Resultado: {fahrenheit} °F</Text>
    )}
  </View>
);
export default Conversor;
