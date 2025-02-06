import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text, TextInput } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { profilecuststyles } from './Style/profile_style_customer';
import { customerstyles } from './Style/Customer_Home_Style';
import { ScrollView } from 'react-native-gesture-handler';

export default class Profile_customer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          animatedValue: new Animated.Value(0),
          username:"",
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
//  delAcc() {
//   const uid = auth().currentUser.uid; 
//   auth().currentUser.delete().then(() => {
//       db.collection('Customer').doc(uid).delete()
//   }).catch((error) => {
//       console.log(error, "error")
//   }).finally(() => setUser((state) => ({ ...state, isLoggedIn: false })))
// }
delAcc(){
    const id = auth().currentUser;
    id
    .delete()
    .then(() => console.log("User deleted"))
    .catch((error) => console.log(error));
}



componentDidMount() {
  let id = auth().currentUser;
      firestore().collection('Customer').doc(id.uid).get().then((docRef) => {
          this.setState({username: docRef.data().Name}),
          this.setState({email: docRef.data().Email}),
          this.setState({mob: docRef.data().Phone}),
          this.setState({password: docRef.data().Password})
      });
}
updateUser(){
    const id = auth().currentUser;

    firestore().collection('Customer').doc(id.uid).update({
      Email: this.state.email,
      Name: this.state.username,
      Phone: this.state.mob,
      Password: this.state.password,
      message: this.state.username + "has Selected You as their Tailor" + "please contact with them on their" + this.state.mob
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
        <View style={profilecuststyles.upper}>
          <Image style={profilecuststyles.logo} source={require('../assets/logo.png')}></Image>
        </View>
      <View style={profilecuststyles.center}>
            <Image source={require('../assets/profile.png')} style={profilecuststyles.profileup}></Image>
            <Text style={profilecuststyles.uname}>{this.state.username}</Text>
            <ScrollView>
            <View style={profilecuststyles.personalinfo}>
              <Text onPress={()=> this.props.navigation.navigate("Edit_Info")} style={profilecuststyles.personalinfotext}>Edit Personal Info</Text>
              <TouchableOpacity >
                  <Image source={require('../assets/right-arrow.png')} style={profilecuststyles.rightarrow}/>
              </TouchableOpacity>
            </View>          
          <View style={profilecuststyles.password}>
              <Text onPress={()=> this.props.navigation.navigate("ChangePassword")} style={profilecuststyles.passwordtext}>Change Password</Text>
              <TouchableOpacity >
                  <Image source={require('../assets/right-arrow.png')} style={profilecuststyles.rightarrow}/>
              </TouchableOpacity>
          </View> 
          <View style={profilecuststyles.delAcc}>
              <Text onPress={() => this.delAcc()} style={profilecuststyles.delAcctext}>Delete Account</Text>
              <TouchableOpacity >
                  <Image source={require('../assets/right-arrow.png')} style={profilecuststyles.rightarrow}/>
              </TouchableOpacity>
          </View>        
            <TouchableOpacity onPress={() => this.signOutUser()} style={profilecuststyles.logout}>
           <Text style={profilecuststyles.logouttext}>Log Out</Text>
          </TouchableOpacity> 
            </ScrollView>
            
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
