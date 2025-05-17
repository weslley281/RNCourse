import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text1}
      >Olá Mundo, Weslley!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={
          () => Alert.alert('Saudações', 'Olá Mundo, Weslley!')}
      >
        <Text style={styles.text2}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 30,
    color: 'darkgray',
    fontWeight: 'bolder',
    marginBottom: 20,
  },
  text2: {
    fontSize: 20,
    color: 'whitesmoke',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'darkblue',
    padding: 10,
    borderRadius: 5,
  },
});
