import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
