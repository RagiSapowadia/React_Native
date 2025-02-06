import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text, TextInput } from 'react-native';
import auth  from "@react-native-firebase/auth";
import Dialog from "react-native-dialog";
// import firestore from "@react-native-firebase/firestore";
import { changepwdstyles } from './Style/Change_pass_Style';
import { Button } from 'react-native-elements';
import { customerstyles } from './Style/Customer_Home_Style';

export default class TChangePassword extends Component {
  constructor(props) {
      super(props);
      this.state = {
          animatedValue: new Animated.Value(0),
      }    
  }
  
    


  render() 
  {
    
    return(  
       
    
      <View>
        <View style={changepwdstyles.upper}>
          <Image style={changepwdstyles.logo} source={require('../assets/logo.png')}></Image>
        </View>
      <View style={changepwdstyles.center}>
           <TextInput  placeholder= 'Enter current password' style={changepwdstyles.currentpwd}/> 
           <TextInput  placeholder= 'Enter new password' style={changepwdstyles.newpwd}/> 
           <TextInput  placeholder= 'Re-enter new password' style={changepwdstyles.confirmnewpwd}/> 
           <TouchableOpacity style={changepwdstyles.savechanges} >
            <Text style={changepwdstyles.savechangestext}>Save Changes</Text>
           </TouchableOpacity>
           
      </View>
    
      <View style={customerstyles.bottom}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("CustomerHome")}>
          <Image style={customerstyles.home} source={require('../assets/home.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("CustomerSearch")}>
          <Image style={customerstyles.search} source={require('../assets/search.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("CustomerCategory")}>
          <Image style={customerstyles.category} source={require('../assets/category.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Profile_customer")}>
          <Image style={customerstyles.profile} source={require('../assets/profile.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={customerstyles.bottomline}>
        <Text style={customerstyles.hometext}>Home</Text>
        <Text style={customerstyles.searchtext}>Search</Text>
        <Text style={customerstyles.categorytext}>Category</Text>
        
        <Text style={customerstyles.profiletext}>Profile</Text>
      </View>
      </View>
       
    );
  }
}
