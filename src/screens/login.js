import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput, ToastAndroid, BackHandler, Animated,StyleSheet} from 'react-native';
import firebase  from "@react-native-firebase/app";
import auth  from "@react-native-firebase/auth";

export default class Login extends Component 
{
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            Password: "",
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
    
    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyBd4iHjcQvHmhC076UOhweNqFXn3R6_spk",
            authDomain: "clothly-b4594.firebaseapp.com",
            projectId: "clothly-b4594",
            storageBucket: "clothly-b4594.appspot.com",
            messagingSenderId: "199900988424",
            appId: "1:199900988424:web:29913dcafa33c2fde1fdbd",
            measurementId: "G-0L2QXXCF7B"
          };
          if(!firebase.apps.length)
          {
            firebase.initializeApp(firebaseConfig);
          }
          
          auth().onAuthStateChanged(user =>{
            if(user) {  
                this.props.navigation.navigate("CustomerHome");
                BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
            }
            else {
                this.props.navigation.navigate("Login")
                BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
            }
          }
          )
          
    }

    handleBackButton() {
        BackHandler.exitApp();
    }
    Login() {
        if(this.state.Category === "Tailor") {
            auth().signInWithEmailAndPassword(this.state.email, this.state.Password)
        .then(() => {
            ToastAndroid.show ('User Successfully LogedIn...!', ToastAndroid.LONG);
            this.props.navigation.navigate("TailorHome");
        })
        .catch(error => {
            if(error.code === 'auth/weak-password') {
                ToastAndroid.show ('Plaese Enter Strong Password...!', ToastAndroid.LONG);
            }
            else if(error.code === 'auth/network-request-failed'){
                ToastAndroid.show ('Check network connection!', ToastAndroid.LONG);
            }        
            else {
                ToastAndroid.show ('Please Enter Valid Email or Password...!', ToastAndroid.LONG);
            }
            console.log(error);
        })
            
        }
        else if(this.state.Category === "Customer") {
            auth().signInWithEmailAndPassword(this.state.email, this.state.Password)
        .then(() => {
            ToastAndroid.show ('User Successfully LogedIn...!', ToastAndroid.LONG);
            this.props.navigation.navigate("CustomerHome");
        })
        .catch(error => {
            if(error.code === 'auth/weak-password') {
                ToastAndroid.show ('Plaese Enter Strong Password...!', ToastAndroid.LONG);
            }
            else if(error.code === 'auth/network-request-failed'){
                ToastAndroid.show ('Check network connection!', ToastAndroid.LONG);
            }        
            else {
                ToastAndroid.show ('Please Enter Valid Email or Password...!', ToastAndroid.LONG);
            }
            console.log(error);
        })

        }
        else if(this.state.Category === "Merchant") {

            auth().signInWithEmailAndPassword(this.state.email, this.state.Password)
        .then(() => {
            ToastAndroid.show ('User Successfully LogedIn...!', ToastAndroid.LONG);
            this.props.navigation.navigate("MerchantHome");
        })
        .catch(error => {
            if(error.code === 'auth/weak-password') {
                ToastAndroid.show ('Plaese Enter Strong Password...!', ToastAndroid.LONG);
            }
            else if(error.code === 'auth/network-request-failed'){
                ToastAndroid.show ('Check network connection!', ToastAndroid.LONG);
            }        
            else {
                ToastAndroid.show ('Please Enter Valid Email or Password...!', ToastAndroid.LONG);
            }
            console.log(error);
        })
        }
        
    }
    render() {  
        return(             
            <View style={{ flex: 1, backgroundColor: "white", position: "relative", alignItems:"center" }}>
            <View style={{ height: 400,width: "100%", backgroundColor: "#5FBEBC", position: "absolute" }} />
            <View style={{ flex: 1,top:80,height:"80%" , width: "80%", backgroundColor: 'white', padding: 15, borderRadius: 30, position: "absolute" }} >
            <Image source={require('../assets/logo.png')} style={{height:120,width:150,marginLeft:70,marginTop:40} } />
            <TextInput placeholder='Enter Email' style={{borderBottomWidth:1,marginTop:30,width:200,alignSelf:'center'}} onChangeText={(Text) => this.setState({email: Text})} value={this.state.email}/>
            {/* <TextInput keyboardType='numeric' maxLength={10} placeholder='Mobile Number' style={{borderBottomWidth:1,marginTop:30,marginLeft:40,marginRight:40}}/> */}
            <TextInput placeholder='Password' secureTextEntry={true} style={{borderBottomWidth:1,marginTop:30,alignSelf:'center',marginBottom:25,width:200}} onChangeText={(Text) => this.setState({Password: Text})} value={this.state.Password}/>
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
                                                <Text style={{color: "#A6A6A6"}}>{category.role}</Text>
                                            </TouchableOpacity>
                                     ))
                                    }
                                </View>
                                : 
                                null
                            }
                            
                        </View>
             <TouchableOpacity onPress={() => this.Login()} style={{borderRadius:30, backgroundColor:"#5FBEBC",alignSelf:'center',marginTop:15, width:150, paddingTop:8, paddingBottom:10, alignItems:'center' }} >
            <Text style={{fontSize:20,color:'#000000'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate("Register")}} style={{borderRadius:30, backgroundColor:"#5FBEBC",alignSelf:'center',marginTop:25, width:150, paddingTop:8, paddingBottom:10, alignItems:'center' }} >
            <Text style={{fontSize:20,color:'#000000'}}>Register</Text>
            </TouchableOpacity>
            
            </View>
        </View>
        );
    }
}