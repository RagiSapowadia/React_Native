import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text, TextInput } from 'react-native';
import auth  from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { editinfostyles } from './Style/Edit_Info_Style';
import { Button } from 'react-native-elements';
import { customerstyles } from './Style/Customer_Home_Style';

export default class Edit_Info extends Component {
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
componentDidMount() {
  let id = auth().currentUser;
      firestore().collection('Customer').doc(id.uid).get().then((docRef) => {
          this.setState({username: docRef.data().Name}),
          this.setState({email: docRef.data().Email}),
          this.setState({mob: docRef.data().Number})
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
        <View style={editinfostyles.upper}>
          <Image style={editinfostyles.logo} source={require('../assets/logo.png')}></Image>
        </View>
      <View style={editinfostyles.center}>
           <TextInput  placeholder= 'Name' style={editinfostyles.name}/> 
           <TextInput  placeholder= 'Phone Number' style={editinfostyles.phno}/> 
           <TextInput  placeholder= 'E-mail' style={editinfostyles.mail}/> 
           <TouchableOpacity style={editinfostyles.savechanges} onPress={() => this.updateUser()} >
            <Text style={editinfostyles.savechangestext}>Save Changes</Text>
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
