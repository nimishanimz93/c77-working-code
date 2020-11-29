import React, { Component } from 'react';
import { View,Text,TextInput,StyleSheet,TouchableOpacity,Image,Alert } from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import firebase from 'firebase';
import db from '../config';


export default class WelcomeScreen extends Component {
    constructor(){
        super()
        this.state={
          emailId : '',
          password: ''
        }
      }
      userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
          return Alert.alert("Successfully Login")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }
    
      userSignUp = (emailId, password) =>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response)=>{
          return Alert.alert("User Added Successfully")
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        });
      }
    
    

render(){
    return(
      <View style={styles.container}>
        <View >
        
          <Text style={styles.title}>Book Santa</Text>
        </View>
        <View style={styles.profileContainer}>
          <SantaAnimation/>
          {/* <Text style={styles.title}>Book Santa</Text> */}
        </View>
        <View>
          <TextInput
          style={styles.loginBox}
          placeholder="example@booksanta.com"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />
      <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />   
       <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffe0b2'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:60,
    fontWeight:'300',
    fontFamily:'AvenirNext-Heavy',
    color : '#ff9800'
  },
  loginBox:{
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor:'#ffab91',
    fontSize: 20,
    marginBottom:20,
    marginTop:5

  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ffff",
    elevation:10
  },
  buttonContainer:{
    flex:1,
  }
})