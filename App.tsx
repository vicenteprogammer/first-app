import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    //Diferente do html, aqui no react native colocamso os tevxtos, imagens e outros elemntos visuais para a nossa aplicação através de tags reservadas. Como está no código abaixo, mas é muito similar as tags html.
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//Para os styles da nossa aplicação não usamos mais o Css, agora vamos usar o StyleSheet, que é um objeto que podemos importar do react native que possibilitar criar os styles.

//Algumas diferenças do Css estão na sintaxe, pois aqui no styleSheet vamos escrever com camelCase as propriedades, como se fosse uma vriavel dentro do objeto.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'#fff',
    backgroundColor: '#00000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
