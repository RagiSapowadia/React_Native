import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text, TextInput } from 'react-native';
import auth  from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { editinfostyles } from './Style/Edit_Info_Style';
import { Button } from 'react-native-elements';
import { customerstyles } from './Style/Customer_Home_Style';

export default class Address extends Component {
  constructor(props) {
      super(props);
      this.state = {
          animatedValue: new Animated.Value(0),
          address: "",
            city: "",
            state: "",
            pincode: "",
      }    
  }

signOutUser = async () => {
  try {
    await auth().signOut();
    this.state.navigation.navigate("Login");
  } catch(e) {
    console.log(e);
  }
}
updateUser() {
    if(this.state.address && this.state.city && this.state.state && this.state.pincode === "" ) {
        ToastAndroid.show ('All fields are required..!', ToastAndroid.LONG);
    }
    const id = auth().currentUser;
    firestore().collection('Customer').doc(id.uid).update({
        Address: this.state.address,
        State: this.state.state,
        City: this.state.city,
        Pincode: this.state.pincode,
            }).then(function() {
                console.log("Document Written To DataBase...!");
            }).catch(function(error) {
                console.error("Error Writing Document...!", error)
            });
    }
  render() 
  { 
    return(  
      <View>
        <View style={editinfostyles.upper}>
          <Image style={editinfostyles.logo} source={require('../assets/logo.png')}></Image>
        </View>
      <View style={editinfostyles.center}>
        <Text style={{marginLeft: 35,marginTop:15,marginBottom:10, fontWeight: 'bold', color: '#000000', fontFamily: 'sans-serif-light', fontSize:25}}>Enter Address</Text>
           <TextInput  placeholder= 'Address' style={editinfostyles.name} onChangeText={(Text) => this.setState({address: Text})} value={this.state.address}/> 
           <TextInput  placeholder= 'City' style={editinfostyles.phno} onChangeText={(Text) => this.setState({city: Text})} value={this.state.city}/> 
           <TextInput  placeholder= 'State' style={editinfostyles.mail} onChangeText={(Text) => this.setState({state: Text})} value={this.state.state}/> 
           <TextInput  placeholder= 'Pincode' style={editinfostyles.mail} onChangeText={(Text) => this.setState({pincode: Text})} value={this.state.pincode}/> 
           <TouchableOpacity style={editinfostyles.savechanges} onPress={() => this.updateUser()} >
            <Text style={editinfostyles.savechangestext}>Submit</Text>
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
