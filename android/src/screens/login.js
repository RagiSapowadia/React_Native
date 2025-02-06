import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput, ToastAndroid, BackHandler, StatusBar, Animated, Easing, Button,StyleSheet,style} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import {Dropdown} from 'react-native-material-dropdown';
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "white", position: "relative", alignItems:"center"
    },
    mobile: {
        borderBottomWidth:1,marginTop:30,marginLeft:40,marginRight:40
    },
    password: {
        borderBottomWidth:1,marginTop:30,marginLeft:40,marginRight:40,marginBottom:60
    },
    logo: {
        height:120,width:150,marginLeft:65,marginTop:40
    },
    upperview: {
        flex:1, height: 400,width: "100%", backgroundColor: "#5FBEBC", position: "absolute", top:0
    },
    centerview:{
        flex: 1,top:80,height:"80%", width: "80%", backgroundColor: 'white', padding: 15, borderRadius: 30,position: "relative"
    },
    Loginbutton: {
        backgroundColor: "#5FBEBC", borderRadius: 30,width:130,alignContent:"center",alignItems:"center",marginLeft:80,paddingTop:8,paddingBottom:10,marginBottom:20
    },
    Buttontext: {
        color: "black",fontSize:23
    },
    dropdown: {
        marginTop:10,
        backgroundColor: '#000000',
        // borderBottomColor: 'gray',
        borderWidth: 1,
        borderBottomWidth: 0.5,
        // marginTop: 20,
    },
  });
export default class Login extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            animatedValue: new Animated.Value(0),
        }    
    }
    
    // componentDidMount()
    // {
    //     const firebaseConfig = {
    //         apiKey: "AIzaSyBd4iHjcQvHmhC076UOhweNqFXn3R6_spk",
    //         authDomain: "clothly-b4594.firebaseapp.com",
    //         projectId: "clothly-b4594",
    //         storageBucket: "clothly-b4594.appspot.com",
    //         messagingSenderId: "199900988424",
    //         appId: "1:199900988424:web:d303764d3e2664c7e1fdbd",
    //         measurementId: "G-J99G4WT3D6"
    //     };

    //     if(!firebaseConfig.apps.length)
    //     {
    //         firebaseConfig.initializeApp(firebaseConfig);
    //     }
    // }
    render() {  
        return(             
            <View style={styles.container}>
                <View style={styles.upperview} />
                <View style={styles.centerview} >
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <ScrollView>
                <TextInput keyboardType='numeric' maxLength={10} placeholder='Mobile Number' style={styles.mobile}/>
                <TextInput secureTextEntry={true} placeholder='Password' style={styles.password}/>
                <TouchableOpacity style={styles.Loginbutton}>
                    <Text style={styles.Buttontext} onPress={() => this.props.navigation.navigate("MerchantHome")}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Loginbutton}>
                    <Text style={styles.Buttontext} onPress={() => this.props.navigation.navigate("Register")}>Register</Text>
                </TouchableOpacity>
                </ScrollView>
                </View>
            </View>
        );
    }
}