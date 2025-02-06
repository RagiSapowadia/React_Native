import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text , TextInput} from 'react-native';
import { measstyles } from './Style/Measurement_Style';
import { customerstyles } from './Style/Customer_Home_Style';
import { max } from 'moment/moment';
import { ScrollView } from 'react-native-gesture-handler';
import auth  from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
export default class BellBottomMeas extends Component {
  constructor(props) 
  {
      super(props);
      this.state = 
      {
        animatedValue: new Animated.Value(0),
          inseam: "",
          bblen: "",
          thigh: "",
          knee: "",
          waist: "",
          waisttoknee: "",
          ankleopen: "",
        }    
  }
  measurement() {
    if(this.state.inseam && this.state.bblen && this.state.thigh && this.state.knee && this.state.waist && this.state.waisttoknee && this.state.ankleopen === "" ) {
        Alert("All Fields are Required...!")
    }
    const id = auth().currentUser;
    firestore().collection("Customer").doc(id.uid).update({
                Inseam: this.state.inseam,
                BBLength: this.state.bblen,
                Thigh: this.state.thigh,
                Knee: this.state.knee,
                Waist: this.state.waist,
                WaisttoKnee: this.state.waisttoknee,
                AnkleOpen: this.state.ankleopen,
               
            }).then(function() {
                console.log("Document Written To DataBase...!");
            }).catch(function(error) {
                console.error("Error Writing Document...!", error)
            });
            this.props.navigation.navigate("FindTailor");
    }
  render() 
  { 
    return(  
      
      <View style={customerstyles.container}>   
        <View style={customerstyles.upper}>
          <Image style={customerstyles.logo} source={require('../assets/logo.png')}></Image>
      </View>
      <View style={customerstyles.center}>
        <ScrollView>
        <Text style={measstyles.edit}>Enter Measurement:</Text>
      <TextInput placeholder='Inseam' style={measstyles.shoulder} onChangeText={(Text) => this.setState({inseam: Text})} value={this.state.inseam}/>
      <TextInput placeholder='BellBottom Length' style={measstyles.shoulder} onChangeText={(Text) => this.setState({bblen: Text})} value={this.state.bblen}/>
      <TextInput placeholder='Thigh' style={measstyles.shoulder} onChangeText={(Text) => this.setState({thigh: Text})} value={this.state.thigh}/>
      <TextInput placeholder='Knee' style={measstyles.shoulder}onChangeText={(Text) => this.setState({knee: Text})} value={this.state.knee}/>
      <TextInput placeholder='Waist' style={measstyles.shoulder} onChangeText={(Text) => this.setState({waist: Text})} value={this.state.waist}/>
      <TextInput placeholder='Waist to Knee' style={measstyles.shoulder} onChangeText={(Text) => this.setState({waisttoknee: Text})} value={this.state.waisttoknee}/>
      <TextInput placeholder='Ankle Opening' style={measstyles.shoulder} onChangeText={(Text) => this.setState({ankleopen: Text})} value={this.state.ankleopen}/>
      <TouchableOpacity onPress={()=> this.measurement()} style={{borderRadius:30, backgroundColor:"#5FBEBC",marginBottom:20,alignSelf:'center',marginTop:15, width:150, paddingTop:8, paddingBottom:10, alignItems:'center' }} >
            <Text style={{fontSize:20,color:'#000000'}}>Submit</Text>
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