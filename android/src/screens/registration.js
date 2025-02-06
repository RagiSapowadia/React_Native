import React, {Component} from 'react';
// import  {useState} from 'react';
// import { Alert,Button } from 'react-native';
// import {DropdownMenu} from 'react-native-dropdown-menu';
import {View, Text, Image, TouchableOpacity, TextInput, ToastAndroid, BackHandler, StatusBar, Animated, Easing, Alert} from 'react-native';
// import RadioForm from 'react-native-simple-radio-button';
// import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from 'react-native-gesture-handler';

// import firebase  from "@react-native-firebase/app";
import auth  from "@react-native-firebase/auth";
import firestore  from "@react-native-firebase/firestore";



export default class Registration extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            number: "",
            animatedValue: new Animated.Value(0),
        }    
    }

    register() {
        if(this.state.email && this.state.name && this.state.password && this.state.number === "") {
            Alert("All Fields are Required...!")
        } else {
            auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                ToastAndroid.show ('User Registered Successfully...!', ToastAndroid.LONG);
                const id = auth().currentUser;
                firestore().collection("Users").doc(id.uid).set({
                    Name: this.state.name,
                    Email: this.state.email,
                    Number: this.state.number,
                    Address: "",
                    State: "",
                    City: "",
                    Pincode: "",
                }).then(function() {
                    console.log("Document Written To DataBase...!");
                }).catch(function(error) {
                    console.error("Error Writing Document...!", error)
                });
                this.props.navigation.navigate("T_home");
            })
            .catch(error => {
                if(error.code === 'auth/weak-password') {
                    ToastAndroid.show ('Plaese Enter Strong Password...!', ToastAndroid.LONG);
                } 
                if(error.code === 'auth/email-already-in-use') {
                    ToastAndroid.show ('This Email is Already in Use...!', ToastAndroid.LONG);
                }
                console.log(error);
            })
        }
    }


     render() { 
        return(      
                           
                <View style={{ flex: 1, backgroundColor: "white", position: "relative", alignItems:"center" }}>
                    <View style={{ height: 400,width: "100%", backgroundColor: "#5FBEBC", position: "absolute" }} />
                    <View style={{ flex: 1,top:80,height:"80%", width: "80%", backgroundColor: 'white', padding: 15, borderRadius: 30, position: "absolute" }} >
                        <Image source={require('../assets/logo.png')} style={{height:120,width:150,marginLeft:65,marginTop:40} } />
                        <ScrollView showsVerticalScrollIndicator={false}>
                        <TextInput placeholder='Name' style={{borderBottomWidth:1,marginTop:10,marginLeft:40,marginRight:40}} onChangeText={(Text) => this.setState({name: Text})} value={this.state.name}/>
                        <TextInput keyboardType='numeric' maxLength={10} placeholder='Phone Number' style={{borderBottomWidth:1,marginTop:2,marginLeft:40,marginRight:40,marginBottom:20}} onChangeText={(Text) => this.setState({number: Number(Text)})} value={this.state.number}/>
                        <TextInput keyboardType='Password' secureTextEntry={true} placeholder='Password' style={{borderBottomWidth:1,marginTop:-17,marginLeft:40,marginRight:40,marginBottom:10}} onChangeText={(Text) => this.setState({password: Text})} value={this.state.password}/>
                        <TextInput placeholder='email' style={{borderBottomWidth:1,marginTop:-10,marginLeft:40,marginRight:40,marginBottom:10}} onChangeText={(Text) => this.setState({email: Text})} value={this.state.email}/>
                        {/* <TextInput placeholder='address' style={{borderBottomWidth:1,marginTop:-10,marginLeft:40,marginRight:40,marginBottom:10}}/>
                        <TextInput placeholder='city' style={{borderBottomWidth:1,marginTop:-10,marginLeft:40,marginRight:40,marginBottom:10}}/>
                        <TextInput placeholder='state' style={{borderBottomWidth:1,marginTop:-10,marginLeft:40,marginRight:40,marginBottom:10}}/> */}
                        <TouchableOpacity onPress={() => this.register()} style={{borderRadius:30, backgroundColor:"#5FBEBC",marginLeft:80, width:130, paddingTop:8, paddingBottom:10, alignItems:'center' }} >
                            <Text>Register</Text>
                        </TouchableOpacity>
                        </ScrollView>                       
                    </View>
                </View>
                    
        );
}
}