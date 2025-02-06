

import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text,TextInput } from 'react-native';
import { profiletailorstyles } from './Style/profile_style_tailor';
import { tailorstyles } from './Style/Tailor_Home_Style';
import { searchstyles } from './Style/Search_Style';
import { tailorliststyles } from './Style/Tailor_List_Style';
import { findtailor } from './Style/Find_Tailor_Style';

import auth  from "@react-native-firebase/auth";
import firestore  from "@react-native-firebase/firestore";       
export default class TailorOrder extends Component {
  constructor(props) {
      super(props);
      this.state = {
          animatedValue: new Animated.Value(0),
      }    
  }
  componentDidMount() {
    const id = auth().currentUser;
    firestore().collection('Tailor').doc(id.uid).get().then((docRef) => {
      // let name=docRef.data().Name;
        this.setState({CustName: docRef.data().cust}),
        this.setState({CustMobile: docRef.data().mob})
      });
  }
  render() 
  { 
    return(  
       <View style={tailorstyles.container}>
       <View style={searchstyles.searchbar}>
        <Image style={searchstyles.searchicon} source={require('../assets/searchbar.png')}></Image>
        
        <TextInput style={searchstyles.searchi} placeholder='Search'/>
        <Image style={searchstyles.cancel} source={require('../assets/cancel.png')}></Image>
        </View>



        <View style={tailorstyles.center}>
        <View style={tailorliststyles.tailor}>
              <View >
                <Image style={tailorliststyles.pic} source={require('../assets/pro.png')}></Image>
              </View>
              <View>
                <TouchableOpacity>
                <Text style={findtailor.name}>{this.state.CustName}</Text>
                <Text style={findtailor.name}>{this.state.CustMobile}</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>




        <View style={profiletailorstyles.bottom}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorHome")}>
          <Image style={profiletailorstyles.home} source={require('../assets/home.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorSearch")}>
          <Image style={profiletailorstyles.search} source={require('../assets/search.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorCategory")}>
          <Image style={profiletailorstyles.category} source={require('../assets/category.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorChat")}>
          <Image style={profiletailorstyles.chat} source={require('../assets/chat.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Profile_tailor")}>
          <Image style={profiletailorstyles.profilebottom} source={require('../assets/profile.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={profiletailorstyles.bottomline}>
        <Text style={profiletailorstyles.hometext}>Home</Text>
        <Text style={profiletailorstyles.searchtext}>Search</Text>
        <Text style={profiletailorstyles.categorytext}>Category</Text>
        <Text style={profiletailorstyles.chattext}>Chat</Text>
        <Text style={profiletailorstyles.profiletext}>Profile</Text>
      </View>
      </View>
    );
  }
}
