import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, Button } from 'react-native';

const App = () => {
  // Estados
  const [texto, setTexto] = useState(''); // Estado para almacenar el texto ingresado
  const [mayusculas, setMayusculas] = useState(0); // Estado para contar las mayúsculas
  const [espacios, setEspacios] = useState(0); // Estado para contar los espacios
  const [totalCaracteres, setTotalCaracteres] = useState(0); // Estado para el total de caracteres

  // Función para calcular mayúsculas, espacios y total de caracteres cuando se presiona el botón
  const calcularEstadisticas = () => {
    var contarMayusculas = 0;
    var contarEspacios = 0;

    // Iterar sobre cada caracter del texto
    for (var x = 0; x < texto.length; x++) {
      // Si el caracter está en el conjunto de mayúsculas, incrementar el contador de mayúsculas
      if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(texto[x])) {
        contarMayusculas += 1;
      }
      // Si el caracter es un espacio en blanco, incrementar el contador de espacios
      if (texto[x] === ' ') {
        contarEspacios += 1;
      }
    }

    // Calcular el total de caracteres (incluyendo espacios)
    const totalCaracteresConEspacios = texto.length + contarEspacios;

    // Establecer los resultados en los estados
    setMayusculas(contarMayusculas);
    setEspacios(contarEspacios);
    setTotalCaracteres(totalCaracteresConEspacios);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <Text style={styles.textLabel}>Ingresa Un Texto</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setTexto(text)}
        />
        <Button
          title="Calcular Estadísticas"
          onPress={calcularEstadisticas} // Llamar a la función cuando se presiona el botón
        />
        {mayusculas !== 0 && espacios !== 0 && totalCaracteres !== 0 && ( // Mostrar los resultados solo si se han calculado las estadísticas
          <>
            <Text>Minusculas: {totalCaracteres - mayusculas}</Text>
            <Text>Mayusculas: {mayusculas}</Text>
            <Text>Espacios: {espacios}</Text>
            <Text>Total de Caracteres: {totalCaracteres}</Text>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e07a5f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    marginBottom: '10%',
  },
  body: {
    backgroundColor: '#81b29a',
    width: '80%',
    height: '40%',
    borderRadius: 20,
    alignItems: 'center',
  },
  textLabel: {
    marginTop: 25,
    marginBottom: 5,
    fontSize: 18,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 3,
    width: '80%',
    height: 100,
    borderColor: '#3d405b',
    padding: 6,
  },
  buttonRes: {
    marginTop: 10,
  },
});

export default App;
