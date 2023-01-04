import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

let timer = null;

let ss=0;
let mm =0;
let hh=0;

export default function App() {

  const [numero, setNumero] = useState(0);
  const [botao, setBotao] = useState('INICIAR');
  const [ultimo, setUltimo] = useState(null);


  function iniciar(){
    // aqui para o tempo do cronometro
    if(timer!==null){
     clearInterval(timer);
     timer = null;

     setBotao('INICIAR');

    }else{
      timer = setInterval(()=>{
        ss++;
        if(ss == 60){
          ss = 0;
          mm++
        }

        if(mm == 60){
          mm = 0;
          hh++
        }

        let format = (hh > 10 ? '0' + hh : hh) + ':'
          + (mm > 10 ? '0' + mm : mm) + ':'
          + (ss > 10 ? '0' + ss : ss);
          setNumero(format);

      }, 100)

      setBotao('PARAR')
    }

  }

  function limpar(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;

    }

    setNumero(0);

      ss=0;
      mm =0;
      hh =0;

      
      setBotao('INICIAR');
    

  }
 

  return (
    <View style={styles.container}>
     <Image
     source={require('./src/crono.png')}
     />

     
      <Text style={styles.timer}> {numero} </Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnTexto}>{botao} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          { ultimo ? 'seu ultimo tempo foi: ' + ultimo: ''}
        </Text>
      </View>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283F3B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff'
  }, 

  btnArea: {
    marginTop: 130,
    flexDirection: 'row',
    height: 40,
  }, 

  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17, 
    borderRadius: 10,
  },

  btnTexto: {
    fontWeight: 'bold',
    color: '#283F3B',
    fontSize: 20,
    
  },

  areaUltima: {
    marginTop: 30,
  },

  textoCorrida: {
    fontSize: 20,
    color: '#fff',
  }


});
