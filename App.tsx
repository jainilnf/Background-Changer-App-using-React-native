import React from "react";
import { View, Text, StyleSheet,Image, Alert, TouchableOpacity, TouchableHighlight } from "react-native";


export default class App extends React.Component{
    // as we donot require to transfer data from one file to other like previously we needed in nametext so it is ok not to write props
  constructor(props){
    super(props);
    this.state={
      randomColor: null,
      buttonColor:null 
    };
  }

  getrandomColor=() => {
    return(
      "rgb(" +
      Math.floor((Math.random() * 256))+
      ","+
      Math.floor((Math.random() * 256))+
      ","+
      Math.floor((Math.random() * 256))+
      ")"
    )
  }

  mybuttonPressed = () => {
    this.setState({randomColor:this.getrandomColor()})
    this.setState({buttonColor:this.getrandomColor()})
  }
  // myimageClicked(){
  //   Alert.alert("Clicked on Image")
  // }
  

  render(){

    return(
      <View style={[styles.container,{backgroundColor:this.state.randomColor}]}>
      <TouchableHighlight onPress={this.mybuttonPressed}>


      <Text style={[styles.text,{backgroundColor:this.state.buttonColor}]}>
        Login
      </Text>
     
      </TouchableHighlight>
    


      </View>
    )
    
  }
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    fontSize:30,
    backgroundColor:"#67E6DC",
    paddingVertical:10,
    paddingHorizontal:40,
    color:'#FFFFFF',
    borderRadius:10,
    borderWidth:2,
    borderColor:"#EA7773",

  }
  

})