import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text , TextInput} from 'react-native';
import { measstyles } from './Style/Measurement_Style';
import { customerstyles } from './Style/Customer_Home_Style';
import auth  from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { max } from 'moment/moment';
import { ScrollView } from 'react-native-gesture-handler';
export default class JacketMeas extends Component {
  constructor(props) 
  {
      super(props);
      this.state = 
      {
        animatedValue: new Animated.Value(0),
        jacketlen: "",
        bust: "",
        obust: "",
        ubust: "",
        waist: "",
        armlen: "",
        armhole: "",
        aroundbicep: "",
        forearm: "",
        wrist: "",
        shoulderlen: "",
      }    
  }
  measurement() {
    if(this.state.jacketlen && this.state.bust && this.state.obust && this.state.ubust && this.state.waist && this.state.armlen && this.state.armhole && this.state.aroundbicep && this.state.forearm && this.state.wrist && this.state.shoulderlen  === "" ) {
        Alert("All Fields are Required...!")
    }
    const id = auth().currentUser;
    firestore().collection("Customer").doc(id.uid).update({
                JacketLength: this.state.jacketlen,
                Bust: this.state.bust,
                OBust: this.state.obust,
                UBust: this.state.ubust,
                Waist: this.state.waist,
                ArmLength: this.state.armlen,
                Armhole: this.state.armhole,
                AroundBicep:this.state.aroundbicep,
                ForeArm:this.state.forearm,
                Wrist:this.state.wrist,
                ShoulderLength:this.state.shoulderlen,
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
      <TextInput keyboardType='numeric' placeholder='Jacket Length' style={measstyles.shoulder} onChangeText={(Text) => this.setState({jacketlen: Text})} value={this.state.jacketlen}/>
      <TextInput keyboardType='numeric' placeholder='Bust' style={measstyles.shoulder}onChangeText={(Text) => this.setState({bust: Text})} value={this.state.bust}/>
      <TextInput keyboardType='numeric' placeholder='Over Bust' style={measstyles.shoulder}onChangeText={(Text) => this.setState({obust: Text})} value={this.state.obust}/>
      <TextInput keyboardType='numeric' placeholder='Under Bust' style={measstyles.shoulder}onChangeText={(Text) => this.setState({ubust: Text})} value={this.state.ubust}/>
      <TextInput keyboardType='numeric' placeholder='Waist' style={measstyles.shoulder}onChangeText={(Text) => this.setState({waist: Text})} value={this.state.waist}/>
      <TextInput keyboardType='numeric' placeholder='Arm Length' style={measstyles.shoulder}onChangeText={(Text) => this.setState({armlen: Text})} value={this.state.armlen}/>
      <TextInput keyboardType='numeric' placeholder='Arm Hole' style={measstyles.shoulder}onChangeText={(Text) => this.setState({armhole: Text})} value={this.state.armhole}/>
      <TextInput keyboardType='numeric' placeholder='Around Bicep' style={measstyles.shoulder}onChangeText={(Text) => this.setState({aroundbicep: Text})} value={this.state.aroundbicep}/>
      <TextInput keyboardType='numeric' placeholder='Fore Arm' style={measstyles.shoulder}onChangeText={(Text) => this.setState({forearm: Text})} value={this.state.forearm}/>
      <TextInput keyboardType='numeric' placeholder='Wrist' style={measstyles.shoulder}onChangeText={(Text) => this.setState({wrist: Text})} value={this.state.wrist}/>
      <TextInput keyboardType='numeric' placeholder='Shoulder Length' style={measstyles.shoulder}onChangeText={(Text) => this.setState({shoulderlen: Text})} value={this.state.shoulderlen}/>
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