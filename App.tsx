import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
//Para conseguirmos usar arquivos de img, sem que o ts responda, vamos ter que criar um arquivo declarativo com um modulo que declara que existe um tipo .png, pois por padrão o type script, não reconhece esse tipo.
import imageBat from './assets/batman.png';
import imageRob from './assets/robin.png';

export default function App() {
  // Manipualndo states para trocar imagens, diferente do js padrão no React native preciasmos avisar ele para renderizar o outro elemento/estado e prara isso precisamos de Hooks, e um desses hooks que vamos usar é o useState.
  const [isClick, setClick] = useState(true)

  function click(){
    setClick((prevClick)=> prevClick = ! isClick)
    console.log(isClick)
  }

  return (
    
    //Diferente do html, aqui no react native colocamso os tevxtos, imagens e outros elemntos visuais para a nossa aplicação através de tags reservadas. Como está no código abaixo, mas é muito similar as tags html.
    
    <View style={styles.container}>
      <Text style={styles.textStyle}>Batman Or Robin</Text>
      <StatusBar style="auto" />
      {/*Trabalhando com imagens no react native: Uso da tag Image */}
      <View>
        <Image style={styleImage.image} source={isClick ? imageBat: imageRob}></Image>
      </View>

      <Button title='Change' onPress={click} />
     
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
  textStyle:{
    color: 'black',
    fontSize: 30,
    marginBottom: 20
  }
});

const styleImage = StyleSheet.create({
  image:{
    width: 180,
    height: 150,
    marginBottom: 30
  }
})
