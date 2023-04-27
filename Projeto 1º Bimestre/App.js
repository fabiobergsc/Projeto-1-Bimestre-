import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  let [filmes, setFilmes] = useState([]);

  const baseURL = "https://api.otaviolube.com/api/filmesw";

  useEffect(function(){
    fetch(baseURL).then(data => data.json)
    .then(objeto => {console.log(objeto);
      setFilmes(objeto.data);
    })
  }, []);



  return (
    <View style={styles.container}>
      {filmes.length > 0 ? filmes.map(filme => <Text>
      {filme.attributes.titulo}</Text>) : <Text>Carregando...</Text>}
      
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
});
