import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{margin: 5}}>O que você quer fazer da vida?</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder='Seu Objetivo no Curso'
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('!')}
        >
          <Text style={{color: 'white'}}>Clique Aqui</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'darkblue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
