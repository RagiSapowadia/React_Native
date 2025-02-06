import React, {Component} from 'react';
import {View,StyleSheet, Text, Image, TouchableOpacity, TextInput, ToastAndroid, BackHandler, StatusBar, Animated, Easing} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { tailorstyles } from './Style/Tailor_Home_Style';
import { customerstyles } from './Style/Customer_Home_Style';
import { findtailor } from './Style/Find_Tailor_Style';

import auth  from "@react-native-firebase/auth";
import firestore  from "@react-native-firebase/firestore";
export default class MProductInfo extends Component 
{    
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      animatedValue: new Animated.Value(0),
      Mob:"",
      Name:""
    }    
  }  
  componentDidMount() {
    const id = auth().currentUser;
    firestore().collection('Tailor').doc(id.uid).get().then((docRef) => {
      // let name=docRef.data().Name;
        this.setState({Mob:docRef.data().mob}),
        this.setState({Name:docRef.data().cust})
      });
      }
  render() 
  { 
    return(
    <View style={tailorstyles.container}>
      <View style={tailorstyles.upper}>
        <TouchableOpacity style={tailorstyles.Loginbutton}>
          <Image style={tailorstyles.logo} source={require('../assets/logo.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={tailorstyles.center}>
        
      </View>   
      <View style={customerstyles.bottom}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorHome")}>
          <Image style={customerstyles.home} source={require('../assets/home.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorSearch")}>
          <Image style={customerstyles.search} source={require('../assets/search.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorCategory")}>
          <Image style={customerstyles.category} source={require('../assets/category.png')}></Image>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Profile_tailor")}>
          <Image style={customerstyles.profile} source={require('../assets/profile.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={customerstyles.bottomline}>
        <Text style={customerstyles.hometext}>Home</Text>
        <Text style={customerstyles.searchtext}>Search</Text>
        <Text style={customerstyles.categorytext}>Category</Text>
        
        <Text style={customerstyles.profiletext}>Profile</Text>
      </View>
    </View>    );
  }
}