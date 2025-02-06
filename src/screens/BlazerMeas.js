import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text , TextInput} from 'react-native';
import { measstyles } from './Style/Measurement_Style';
import { customerstyles } from './Style/Customer_Home_Style';
import { max } from 'moment/moment';
import auth  from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { ScrollView } from 'react-native-gesture-handler';
export default class BlazerMeas extends Component {
  constructor(props) 
  {
      super(props);
      this.state = 
      {
        animatedValue: new Animated.Value(0),
          ctoshoulder: "",
          stosleeve: "",
          shoulder: "",
          arm: "",
          bicep: "",
          forearm: "",
          chest: "",
          frontlen: "",
          armhole: "",
      }
  }
  measurement() {
    if(this.state.ctoshoulder && this.state.stosleeve && this.state.shoulder && this.state.arm && this.state.bicep && this.state.forearm && this.state.chest && this.state.frontlen && this.state.armhole  === "" ) {
        Alert("All Fields are Required...!")
    }
    const id = auth().currentUser;
    firestore().collection("Customer").doc(id.uid).update({
                Collertoshoulder: this.state.ctoshoulder,
                Shouldertosleeve: this.state.stosleeve,
                Shoulder: this.state.shoulder,
                Arm: this.state.arm,
                Bicep: this.state.bicep,
                Forearm: this.state.forearm,
                Chest: this.state.chest,
                FrontLength:this.state.frontlen,
                Armhole:this.state.armhole
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
      <TextInput keyboardType='numeric' placeholder='Collar to Shoulder' style={measstyles.shoulder} onChangeText={(Text) => this.setState({ctoshoulder: Text})} value={this.state.ctoshoulder}/>
      <TextInput keyboardType='numeric' placeholder='Shoulder to Sleeve' style={measstyles.shoulder} onChangeText={(Text) => this.setState({stosleeve: Text})} value={this.state.stosleeve}/>
      <TextInput keyboardType='numeric' placeholder='Shoulder' style={measstyles.shoulder} onChangeText={(Text) => this.setState({shoulder: Text})} value={this.state.shoulder}/>
      <TextInput keyboardType='numeric' placeholder='Arm' style={measstyles.shoulder}onChangeText={(Text) => this.setState({arm: Text})} value={this.state.arm}/>
      <TextInput keyboardType='numeric' placeholder='Bicep' style={measstyles.shoulder}onChangeText={(Text) => this.setState({bicep: Text})} value={this.state.bicep}/>
      <TextInput keyboardType='numeric' placeholder='ForeArm' style={measstyles.shoulder}onChangeText={(Text) => this.setState({forearm: Text})} value={this.state.Forearm}/>
      <TextInput keyboardType='numeric' placeholder='Chest' style={measstyles.shoulder}onChangeText={(Text) => this.setState({chest: Text})} value={this.state.chest}/>
      <TextInput keyboardType='numeric' placeholder='Front Length' style={measstyles.shoulder}onChangeText={(Text) => this.setState({frontlen: Text})} value={this.state.frontlen}/>
      <TextInput keyboardType='numeric' placeholder='Arm Hole' style={measstyles.shoulder}onChangeText={(Text) => this.setState({armhole: Text})} value={this.state.armhole}/>
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