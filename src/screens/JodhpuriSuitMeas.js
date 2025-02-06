import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text , TextInput} from 'react-native';
import { measstyles } from './Style/Measurement_Style';
import { customerstyles } from './Style/Customer_Home_Style';
import { max } from 'moment/moment';
import { ScrollView } from 'react-native-gesture-handler';
import auth  from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
export default class JodhpuriSuitMeas extends Component {
  constructor(props) 
  {
      super(props);
      this.state = 
      {
        animatedValue: new Animated.Value(0),
        chest: "",
        waist: "",
        hips: "",
        bicep: "",
        collar: "",
        armlen: "",
        armhole:"",
        shoulder: "",
        wrist: "",
        forearm: "",
        suitlen:""
      }    
  }
  measurement() {
    if(this.state.chest && this.state.waist && this.state.hips && this.state.bicep && this.state.collar && this.state.armlen && this.state.armhole && this.state.shoulder && this.state.wrist && this.state.forearm && this.state.suitlen  === "" ) {
        Alert("All Fields are Required...!")
    }
    const id = auth().currentUser;
    firestore().collection("Customer").doc(id.uid).update({
                Chest: this.state.chest,
                Waist: this.state.waist,
                Hips: this.state.hips,
                Bicep: this.state.bicep,
                Collar: this.state.collar,
                ArmLength: this.state.armlen,
                Armhole:this.state.armhole,
                Shoulder: this.state.shoulder,
                Wrist: this.state.wrist,
                Forearm: this.state.forearm,
                SuitLength:this.state.suitlen,
                
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
      <TextInput keyboardType='numeric' placeholder='Chest' style={measstyles.shoulder}onChangeText={(Text) => this.setState({chest: Text})} value={this.state.chest}/>
      <TextInput keyboardType='numeric' placeholder='Waist' style={measstyles.shoulder}onChangeText={(Text) => this.setState({waist: Text})} value={this.state.waist}/>
      <TextInput keyboardType='numeric' placeholder='Hips' style={measstyles.shoulder}onChangeText={(Text) => this.setState({hips: Text})} value={this.state.hips}/>
      <TextInput keyboardType='numeric' placeholder='Bicep' style={measstyles.shoulder}onChangeText={(Text) => this.setState({bicep: Text})} value={this.state.bicep}/>
      <TextInput keyboardType='numeric' placeholder='Collar' style={measstyles.shoulder}onChangeText={(Text) => this.setState({collar: Text})} value={this.state.collar}/>
      <TextInput keyboardType='numeric' placeholder='Arm Length' style={measstyles.shoulder}onChangeText={(Text) => this.setState({armlen: Text})} value={this.state.armlen}/>
      <TextInput keyboardType='numeric' placeholder='Arm Hole' style={measstyles.shoulder}onChangeText={(Text) => this.setState({armhole: Text})} value={this.state.armhole}/>
      <TextInput keyboardType='numeric' placeholder='Shoulder' style={measstyles.shoulder}onChangeText={(Text) => this.setState({shoulder: Text})} value={this.state.shoulder}/>
      <TextInput keyboardType='numeric' placeholder='Wrist' style={measstyles.shoulder}onChangeText={(Text) => this.setState({wrist: Text})} value={this.state.wrist}/>
      <TextInput keyboardType='numeric' placeholder='Forearm' style={measstyles.shoulder}onChangeText={(Text) => this.setState({forearm: Text})} value={this.state.forearm}/>
      <TextInput keyboardType='numeric' placeholder='Suit Length' style={measstyles.shoulder}onChangeText={(Text) => this.setState({suitlen: Text})} value={this.state.suitlen}/>
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