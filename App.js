/*
  Nome:John Kleber
  Matricula: 17257062
  ***IMPORTANTE***
  CASO DE ERRO DE IMPORTAÇÃO DO COLOR PICK COMENTE A LINHA DE IMPORTAÇÃO DO MESMO E MUDE A VIARAVEL "usaColorPicker" PARA FALSE
  PARA QUE O APLICATIVO FUNCIONE MUDANDO A COR SEM O SELETOR.
*/

import React, { Component } from 'react';
import { 
  View, 
  Text,
  TextInput,
  StyleSheet,
  Button,
  AppRegistry, 
} from 'react-native';
import { ColorPicker } from 'react-native-color-picker'; //EM CASO DE ERRO COMENTE ESTA LINHA
export default class Prova extends Component {

  constructor(props){
    super(props);
    this.state = {
      texto:'',
      textoInput: '',
      corFundo: '#BA55D3',
      corTexto: '#ffffff',
      verificaCorTexto:false,
      verificaCorFundo:false,
      usaColorPicker: true, //EM CASO DE ERRO MUDE PARA FALSE
      fontSize: 20
    };

    this.trocaCorFundo = this.trocaCorFundo.bind(this);
    this.trocaCorTexto = this.trocaCorTexto.bind(this);
    this.limpar = this.limpar.bind(this);
    this.ativaCorTexto = this.ativaCorTexto.bind(this);
    this.ativaCorFundo = this.ativaCorFundo.bind(this);
    this.aumentaFonte = this.aumentaFonte.bind(this);
    this.diminuiFonte = this.diminuiFonte.bind(this);
  }

  trocaCorFundo(color){
    if(this.state.usaColorPicker == false){
        const menor = 0;
        const maior = 255;
        const r = menor + Math.random() * (maior - menor);
        const g = menor + Math.random() * (maior - menor);
        const b = menor + Math.random() * (maior - menor);
        this.setState({ corFundo: 'rgb('+r+', '+g+' , '+b+')' });
    }else{
         this.setState({ corFundo: color});
         this.setState({verificaCorFundo: false});
      }
  }

  trocaCorTexto(color){
  if(this.state.usaColorPicker == false){
    const menor = 0;
    const maior = 255;
    const r = menor + Math.random() * (maior - menor);
    const g = menor + Math.random() * (maior - menor);
    const b = menor + Math.random() * (maior - menor);
    this.setState({ corTexto: 'rgb('+r+', '+g+' , '+b+')' });
    }else{
      this.setState({ corTexto: color});
      this.setState({verificaCorTexto: false});
    }
  }

  ativaCorTexto(){
     if(this.state.usaColorPicker){
        this.setState({verificaCorTexto: true});
      }else{
        this.trocaCorTexto('#ffffff');
      }
  }
   ativaCorFundo(){
    if(this.state.usaColorPicker){
        this.setState({verificaCorFundo: true});
    }else{
        this.trocaCorFundo('#ffffff');
    }
  }
  aumentaFonte(){
    let tam = this.state.fontSize + 2;
    this.setState({fontSize: tam})
  }
  diminuiFonte(){
    let tam = this.state.fontSize - 2;
    this.setState({fontSize: tam})
  }

  limpar() {
    this.setState({ textoInput: "" });
    this.inputPrincipal.blur();
    this.setState({verificaCorTexto: false});
    this.setState({verificaCorFundo: false});
  }
  render(){

    var styles = StyleSheet.create({
    containerButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: "50%",
      marginLeft: "15%"
    },
    containerButton2: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: "50%",
      marginLeft: "-30%"
    },
    container:{
      flex:1,
    },
    input: {
      margin: 0,
      padding: 10,
      borderWidth: 1,
      borderColor: "#000000",
      height: 300,
      backgroundColor: this.state.corFundo,
      color: this.state.corTexto,
      fontSize: this.state.fontSize,
    },
    texto: {
      margin: 20,
      fontSize: 50,
      color: '#ff0000',
      textAlign: 'center'
    }
  });
    var varVerificaCorTexto = this.state.verificaCorTexto;
    let botaoCorTexto;
    if(varVerificaCorTexto){

      botaoCorTexto = <ColorPicker
        oldColor='purple'
        color={this.state.color}
        onColorChange={this.onColorChange}
        onColorSelected={this.trocaCorTexto}
        onOldColorSelected={this.trocaCorTexto}
        style={{flex: 1}}
      />;
      }

    var varVerificaCorFundo = this.state.verificaCorFundo;
    let botaoCorFundo;
    if(varVerificaCorFundo){

      botaoCorFundo = <ColorPicker
        oldColor='purple'
        color={this.state.color}
        onColorChange={this.onColorChange}
        onColorSelected={this.trocaCorFundo}
        onOldColorSelected={this.trocaCorFundo}
        style={{flex: 1}}
      />;
      }
      
    return(
      
      <View style={styles.container} >
        <TextInput style={styles.input} 
          ref={(focus: any) => {
            this.inputPrincipal = focus;
          }}
          underlineColorAndroid = "transparent"
          placeholder="Digite seu nome..."
          value={this.state.textoInput}
          onChangeText={(textoInput) => this.setState({textoInput})}
          />
          <Button color= "#44153c" title="Limpar" onPress={this.limpar} />
          <Button color= "#000000" title="Cor Texto" onPress={this.ativaCorTexto} />
          <Button color= "#000000" title="Cor Fundo" onPress={this.ativaCorFundo}/>
          
          <View style={{flex: 1, flexDirection: 'row', height: 50}}>
            <View style={styles.containerButton} >
              <Button color= "#f55a42" title="+ Fonte" onPress={this.aumentaFonte} />
              
            </View> 
            <View style={styles.containerButton2} >
              <Button color= "#f59c42" title="- Fonte" onPress={this.diminuiFonte} />
            </View> 
              
          </View>
          {botaoCorTexto}
          {botaoCorFundo}

      </View> 
    );
  }
}


AppRegistry.registerComponent('Prova', () => Prova);

