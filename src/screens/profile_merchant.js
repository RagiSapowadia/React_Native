import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text, TextInput } from 'react-native';
import auth  from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { profilemerchantstyles } from './Style/profile_style_merchant';
import { customerstyles } from './Style/Customer_Home_Style';

export default class ProfileMerchant extends Component {
  constructor(props) {
      super(props);
      this.state = {
          animatedValue: new Animated.Value(0),
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
delAcc(){
  const id = auth().currentUser;
  id
  .delete()
  .then(() => console.log("User deleted"))
  .catch((error) => console.log(error));
}
componentDidMount() {
  let id = auth().currentUser;
      firestore().collection('Merchant').doc(id.uid).get().then((docRef) => {
          this.setState({username: docRef.data().Name}),
          this.setState({email: docRef.data().Email}),
          this.setState({mob: docRef.data().Phone}),
          this.setState({password: docRef.data().Password})
      });
}
updateUser(){
    const id = auth().currentUser;

    firestore().collection('Merchant').doc(id.uid).update({
      Email: this.state.email,
      Name: this.state.username,
      Phone: this.state.mob,
      Password: this.state.password,
    }).then(function(){
      ToastAndroid.show("Updated Successfully...!", ToastAndroid.LONG);
    })
    .catch(function(error){
      console.error("Error Writing Document:", error);
    });
    // this.props.navigation.navigate('Dashboard')
  }
  render() 
  { 
    return(  
      <View>
        <View style={profilemerchantstyles.upper}>
          <Image style={profilemerchantstyles.logo} source={require('../assets/logo.png')}></Image>
        </View>
      <View style={profilemerchantstyles.center}>
            <Image source={require('../assets/profile.png')} style={profilemerchantstyles.profile}></Image>
            <Text style={profilecuststyles.uname}>{this.state.username}</Text>
            <View style={profilemerchantstyles.personalinfo}>
              <Text style={profilemerchantstyles.personalinfotext}>Edit Personal Info</Text>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate("Edit_Info")}>
                  <Image source={require('../assets/right-arrow.png')} style={profilemerchantstyles.rightarrow}/>
              </TouchableOpacity>
          </View>
          <View style={profilemerchantstyles.password}>
              <Text style={profilemerchantstyles.passwordtext}>Change Password</Text>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate("MChangePassword")}>
                  <Image source={require('../assets/right-arrow.png')} style={profilemerchantstyles.rightarrow}/>
              </TouchableOpacity>
          </View>
          <View style={profilemerchantstyles.delAcc}>
              <Text style={profilemerchantstyles.delAcctext}>Delete Account</Text>
              <TouchableOpacity onPress={()=> this.delAcc()}>
                  <Image source={require('../assets/right-arrow.png')} style={profilemerchantstyles.rightarrow}/>
              </TouchableOpacity>
          </View>        
            <TouchableOpacity onPress={() => this.signOutUser()} style={profilemerchantstyles.logout}>
           <Text style={profilemerchantstyles.logouttext}>Log Out</Text>
          </TouchableOpacity> 
      </View>
          
      <View style={customerstyles.bottom}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("MerchantHome")}>
            <Image style={customerstyles.home} source={require('../assets/home.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("MerchantSearch")}>
            <Image style={customerstyles.search} source={require('../assets/search.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("MerchantHome")}>
            <Image style={customerstyles.category} source={require('../assets/category.png')}></Image>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("ProfileMerchant")}>
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
