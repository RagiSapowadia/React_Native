import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text, TextInput } from 'react-native';
import auth  from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { profiletailorstyles } from './Style/profile_style_tailor';
import { customerstyles } from './Style/Customer_Home_Style';

export default class Profile_Tailor extends Component {
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
      firestore().collection('Tailor').doc(id.uid).get().then((docRef) => {
          this.setState({username: docRef.data().Name}),
          this.setState({email: docRef.data().Email}),
          this.setState({mob: docRef.data().Phone}),
          this.setState({password: docRef.data().Password})
  });
}

updateUser(){
  const id = auth().currentUser;

  firestore().collection('Tailor').doc(id.uid).update({
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
        <View style={profiletailorstyles.upper}>
          <Image style={profiletailorstyles.logo} source={require('../assets/logo.png')}></Image>
        </View>
      <View style={profiletailorstyles.center}>
            <Image source={require('../assets/profile.png')} style={profiletailorstyles.profile}></Image>
            <Text style={profilecuststyles.uname}>{this.state.username}</Text>
            <View style={profiletailorstyles.personalinfo}>
              <Text style={profiletailorstyles.personalinfotext}>Edit Personal Info</Text>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate("Edit_Info")}>
                  <Image source={require('../assets/right-arrow.png')} style={profiletailorstyles.rightarrow}/>
              </TouchableOpacity>
          </View>
          <View style={profiletailorstyles.password}>
              <Text style={profiletailorstyles.passwordtext}>Change Password</Text>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate("TChangePassword")} >
                  <Image source={require('../assets/right-arrow.png')} style={profiletailorstyles.rightarrow}/>
              </TouchableOpacity>
          </View>
          <View style={profiletailorstyles.delAcc}>
              <Text style={profiletailorstyles.delAcctext}>Delete Account</Text>
              <TouchableOpacity onPress={()=> this.delAcc()}>
                  <Image source={require('../assets/right-arrow.png')} style={profiletailorstyles.rightarrow}/>
              </TouchableOpacity>
          </View>        
            <TouchableOpacity onPress={() => this.signOutUser()} style={profiletailorstyles.logout}>
           <Text style={profiletailorstyles.logouttext}>Log Out</Text>
          </TouchableOpacity> 
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
      </View>
       
    );
  }
}
