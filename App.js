import React, { Component } from "react"
import { View,Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native'

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {nota1: 0, nota2: 0, nota3: 0, nFaltas: 0, result: "" , m: "" }
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    let n1 = parseFloat(this.state.nota1)
    let n2 = parseFloat(this.state.nota2)
    let n3 = parseFloat(this.state.nota3)
    let media = (n1 + n2 + n3) /3
    
    if(media >= 6 && this.state.nFaltas > 6 ){
      this.setState({result: "O aluno foi aprovado com media:" , m: media.toFixed(1)})
    }else{
      this.setState({result: "O aluno foi reprovado com media:" , m: media.toFixed(1)})
    }
  }

  render(){
    return(
      <View styles={styles.container}>
        <Text style={styles.text}> GP1 de RP6</Text>
        <Text style={styles.text2}>Digite as medias e presencas do aluno</Text>
        <TextInput style={styles.textInput} 
          onChangeText={(nota1) => {this.setState({nota1})}}
          keyboardType="numeric"
          placeholder="Digite a primeira nota:"  
        />
        <TextInput style={styles.textInput}
          onChangeText={(nota2) => {this.setState({nota2})}}
          keyboardType="numeric"
          placeholder="Digite a segunda nota:"
        />
        <TextInput style={styles.textInput}
          onChangeText={(nota3) => {this.setState({nota3})}}
          keyboardType="numeric"
          placeholder="Digite a terceira nota:"
        />
        <TextInput style={styles.textInput}
          onChangeText={(nFaltas) => {this.setState({nFaltas})}}
          keyboardType="numeric"
          placeholder="Digite o numero de faltas:"
        />
        <TouchableOpacity onPress={this.calcular}>
          <Text style={styles.textToutch}>Clique para Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.text3}>{this.state.result}</Text>
        <Text style={styles.text4}>{this.state.m}</Text>
        <Text style={styles.textRodaPe}>                       Todos os direitos reservados           {'\u00A9'}DSFC</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  text:{
    fontFamily: 'Arial',
    textAlign: "center",
    padding: 30,
    fontSize: 30,
    backgroundColor: '#228B22',
    fontWeight: 'bold',
    color: '#000',
  },
  text2:{
    fontWeight: 'bold',
    color: '#000',
    textAlign: "center",
    padding: 20,
    fontSize: 20,
  },
  text3:{
    fontWeight: 'bold',
    color: '#000',
    textAlign: "center",
    padding: 20,
    fontSize: 20,
  },
  text4:{
    fontWeight: 'bold',
    color: '#000',
    textAlign: "center",
    padding: 10,
    fontSize: 30,
  },
  textToutch:{
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    borderColor:  '#000',
    backgroundColor: '#1E90FF'
  },
  textInput:{
    padding: 10,
    backgroundColor: '#cccccc',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    fontSize: 20

  },
  textRodaPe:{
    fontFamily: 'Arial',
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    backgroundColor: '#228B22',
    fontWeight: 'bold',
    color: '#000',
    marginTop: 78,
    
  }

})