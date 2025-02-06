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
import Category from './Merchant_category';



export default class Registration extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            number: "",
            Category: 'Choose Role',
            drop: false,
            animatedValue: new Animated.Value(0),
            chooseCategory: [
                {
                    role: "Tailor"
                },
                {
                    role: "Customer"
                },
                {
                    role: "Merchant"
                }
            ]

        }    
    }

    openDrop() {
        this.state.drop =! this.state.drop;
        this.setState({ drop: this.state.drop });
    }

    selectCategory(index) {
        this.state.Category = this.state.chooseCategory[index].role;
        this.setState({Category: this.state.Category})
        this.state.drop = false;
        this.setState({drop: this.state.drop})
    }

    register() {
        if(this.state.email && this.state.name && this.state.password && this.state.number === "" ) {
            Alert("All Fields are Required...!")
        }
        if(this.state.Category === "Tailor") {

            auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                ToastAndroid.show ('Tailor Registered Successfully...!', ToastAndroid.LONG);
                const id = auth().currentUser;
                firestore().collection("Tailor").doc(id.uid).set({
                    Name: this.state.name,
                    Email: this.state.email,
                    Number: this.state.number,
                    Address: "",
                    State: "",
                    City: "",
                    Pincode: "",
                    Category:this.state.Category
                }).then(function() {
                    console.log("Document Written To DataBase...!");
                }).catch(function(error) {
                    console.error("Error Writing Document...!", error)
                });
                this.props.navigation.navigate("TailorHome");
            })
            .catch(error => {
                if(error.code === 'auth/weak-password') {
                    ToastAndroid.show ('Please Enter Strong Password...!', ToastAndroid.LONG);
                } 
                if(error.code === 'auth/email-already-in-use') {
                    ToastAndroid.show ('This Email is Already in Use...!', ToastAndroid.LONG);
                }
                console.log(error);
            })
        }
        else if(this.state.Category === "Customer") {

            auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                ToastAndroid.show ('Customer Registered Successfully...!', ToastAndroid.LONG);
                const id = auth().currentUser;
                firestore().collection("Customer").doc(id.uid).set({
                    Name: this.state.name,
                    Email: this.state.email,
                    Number: this.state.number,
                    Address: "",
                    State: "",
                    City: "",
                    Pincode: "",
                    Category:this.state.Category
                }).then(function() {
                    console.log("Document Written To DataBase...!");
                }).catch(function(error) {
                    console.error("Error Writing Document...!", error)
                });
                this.props.navigation.navigate("CustomerHome");
            })
            .catch(error => {
                if(error.code === 'auth/weak-password') {
                    ToastAndroid.show ('Please Enter Strong Password...!', ToastAndroid.LONG);
                } 
                if(error.code === 'auth/email-already-in-use') {
                    ToastAndroid.show ('This Email is Already in Use...!', ToastAndroid.LONG);
                }
                console.log(error);
            })
        }
        else if(this.state.Category === "Merchant") {

            auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                ToastAndroid.show ('Merchant Registered Successfully...!', ToastAndroid.LONG);
                const id = auth().currentUser;
                firestore().collection("Merchant").doc(id.uid).set({
                    Name: this.state.name,
                    Email: this.state.email,
                    Number: this.state.number,
                    Address: "",
                    State: "",
                    City: "",
                    Pincode: "",
                    Category:this.state.Category
                }).then(function() {
                    console.log("Document Written To DataBase...!");
                }).catch(function(error) {
                    console.error("Error Writing Document...!", error)
                });
                this.props.navigation.navigate("MerchantHome");
            })
            .catch(error => {
                if(error.code === 'auth/weak-password') {
                    ToastAndroid.show ('Please Enter Strong Password...!', ToastAndroid.LONG);
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
                        <TextInput placeholder='  Name' style={{borderBottomWidth:1,fontSize:15, marginTop:10,marginLeft:40,marginRight:40}} onChangeText={(Text) => this.setState({name: Text})} value={this.state.name}/>
                        <TextInput keyboardType='numeric' maxLength={10} placeholder='  Phone Number' style={{borderBottomWidth:1,marginTop:2,marginLeft:40,marginRight:40,marginBottom:20}} onChangeText={(Text) => this.setState({number: Number(Text)})} value={this.state.number}/>
                        <TextInput keyboardType='Password' secureTextEntry={true} placeholder='  Password' style={{borderBottomWidth:1,marginTop:-17,marginLeft:40,marginRight:40,marginBottom:10}} onChangeText={(Text) => this.setState({password: Text})} value={this.state.password}/>
                        <TextInput placeholder='  Email' style={{borderBottomWidth:1,fontSize:15,marginTop:-10,marginLeft:40,marginRight:40,marginBottom:10}} onChangeText={(Text) => this.setState({email: Text})} value={this.state.email}/>
                        {/* <TextInput placeholder='address' style={{borderBottomWidth:1,marginTop:-10,marginLeft:40,marginRight:40,marginBottom:10}}/>
                        <TextInput placeholder='city' style={{borderBottomWidth:1,marginTop:-10,marginLeft:40,marginRight:40,marginBottom:10}}/>
                        <TextInput placeholder='state' style={{borderBottomWidth:1,marginTop:-10,marginLeft:40,marginRight:40,marginBottom:10}}/> */}
                        <View>
                            <TouchableOpacity onPress={() => this.openDrop()} style={{ alignSelf:"center", width:"72%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: "#000", borderBottomWidth: 1, padding: 8 }}>
                                <Text style={{ color: "#A6A6A6", fontSize: 15 }}>{this.state.Category}</Text>
                                <Image source={require('../assets/right-arrow.png')} style={{ width: 15, height: 15, transform: [{ rotate: this.state.drop? '270deg' : '90deg' }] }}></Image>
                            </TouchableOpacity>
                            {
                                this.state.drop === true?
                                <View style={{ width: "85%", alignSelf:"center", marginLeft:40 }}>
                                    {
                                        this.state.chooseCategory.map((category, index) => (
                                            <TouchableOpacity onPress={() => this.selectCategory(index)} style={{ width: "85%", paddingVertical: 10, justifyContent: "center", borderBottomColor: '#000', borderBottomWidth: 0.5 }}>
                                                <Text>{category.role}</Text>
                                            </TouchableOpacity>
                                     ))
                                    }
                                </View>
                                : 
                                null
                            }
                            
                        </View>
                        <TouchableOpacity onPress={() => this.register()} style={{borderRadius:30, backgroundColor:"#5FBEBC",alignSelf:"center", width:150,height:50, paddingTop:8, alignItems:'center', marginTop:38}} >
                        <Text style={{fontFamily:"Sans-Sarif", fontSize:20, fontWeight: 100, color:"#000000"}}>Register</Text>
                        </TouchableOpacity>  
                        </ScrollView>                       
                    </View>
                </View>
                    
        );
}
}