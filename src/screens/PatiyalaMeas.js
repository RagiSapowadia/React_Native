import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text , TextInput} from 'react-native';
import { measstyles } from './Style/Measurement_Style';
import { customerstyles } from './Style/Customer_Home_Style';
import { max } from 'moment/moment';
import { ScrollView } from 'react-native-gesture-handler';
import auth  from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
export default class PatiyalaMeas extends Component {
  constructor(props) 
  {
      super(props);
      this.state = 
      {
        animatedValue: new Animated.Value(0),
        neck: "",
        bust: "",
        obust: "",
        ubust: "",
        waist: "",
        arm: "",
        armhole: "",
        aroundbicep: "",
        forearm: "",
        wrist: "",
        shoulder: "",
        stowaist:"",
        stothigh:"",
        inseam:"",
        wtoankle:"",
        frontpanel:"",
        ankleopen:""
      }    
  }
  measurement() {
    if(this.state.neck && this.state.bust && this.state.obust && this.state.ubust && this.state.waist && this.state.arm && this.state.armhole && this.state.aroundbicep && this.state.forearm && this.state.wrist && this.state.shoulder && this.state.stowaist && this.state.stothigh && this.state.inseam && this.state.ankleopen && this.state.frontpanel && this.state.wtoankle === "" ) {
        Alert("All Fields are Required...!")
    }
    const id = auth().currentUser;
    firestore().collection("Customer").doc(id.uid).update({
                Neck: this.state.neck,
                Bust: this.state.bust,
                OverBust: this.state.obust,
                UnderBust: this.state.ubust,
                Waist: this.state.waist,
                Arm: this.state.arm,
                ArmHole: this.state.armhole,
                AroundBicep:this.state.aroundbicep,
                ForeArm: this.state.forearm,
                Wrist: this.state.wrist,
                ShoulderLength:this.state.shoulder,
                ShoulderToWaist: this.state.stowaist,
                ShoulderToThigh: this.state.stothigh,
                Inseam:this.state.inseam,
                WaistToAnkle: this.state.wtoankle,
                FrontPanel: this.state.frontpanel,
                AnkleOpen:this.state.ankleopen
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
      <TextInput keyboardType='numeric' placeholder='Neck' style={measstyles.shoulder} onChangeText={(Text) => this.setState({neck: Text})} value={this.state.neck}/>
      <TextInput keyboardType='numeric' placeholder='Bust' style={measstyles.shoulder} onChangeText={(Text) => this.setState({bust: Text})} value={this.state.bust}/>
      <TextInput keyboardType='numeric' placeholder='Over Bust' style={measstyles.shoulder} onChangeText={(Text) => this.setState({obust: Text})} value={this.state.obust}/>
      <TextInput keyboardType='numeric' placeholder='Under Bust' style={measstyles.shoulder} onChangeText={(Text) => this.setState({ubust: Text})} value={this.state.ubust}/>
      <TextInput keyboardType='numeric' placeholder='Waist' style={measstyles.shoulder} onChangeText={(Text) => this.setState({waist: Text})} value={this.state.waist}/>
      <TextInput keyboardType='numeric' placeholder='Arm Length' style={measstyles.shoulder} onChangeText={(Text) => this.setState({arm: Text})} value={this.state.arm}/>
      <TextInput keyboardType='numeric' placeholder='Arm Hole' style={measstyles.shoulder} onChangeText={(Text) => this.setState({armhole: Text})} value={this.state.armhole}/>
      <TextInput keyboardType='numeric' placeholder='Around Bicep' style={measstyles.shoulder} onChangeText={(Text) => this.setState({aroundbicep: Text})} value={this.state.aroundbicep}/>
      <TextInput keyboardType='numeric' placeholder='Fore Arm' style={measstyles.shoulder} onChangeText={(Text) => this.setState({forearm: Text})} value={this.state.forearm}/>
      <TextInput keyboardType='numeric' placeholder='Wrist' style={measstyles.shoulder} onChangeText={(Text) => this.setState({wrist: Text})} value={this.state.wrist}/>
      <TextInput keyboardType='numeric' placeholder='Shoulder Length' style={measstyles.shoulder} onChangeText={(Text) => this.setState({shoulder: Text})} value={this.state.shoulder}/>
      <TextInput keyboardType='numeric' placeholder='Shoulder to Waist' style={measstyles.shoulder} onChangeText={(Text) => this.setState({stowaist: Text})} value={this.state.stowaist}/>
      <TextInput keyboardType='numeric' placeholder='Shoulder to Thigh' style={measstyles.shoulder} onChangeText={(Text) => this.setState({stothigh: Text})} value={this.state.stothigh}/>
      <TextInput keyboardType='numeric' placeholder='Inseam' style={measstyles.shoulder} onChangeText={(Text) => this.setState({inseam: Text})} value={this.state.inseam}/>
      <TextInput keyboardType='numeric' placeholder='Waist to Ankle' style={measstyles.shoulder} onChangeText={(Text) => this.setState({wtoankle: Text})} value={this.state.wtoankle}/>
      <TextInput keyboardType='numeric' placeholder='Front Panel' style={measstyles.shoulder} onChangeText={(Text) => this.setState({frontpanel: Text})} value={this.state.frontpanel}/>
      <TextInput keyboardType='numeric' placeholder='Ankle Opening' style={measstyles.shoulder} onChangeText={(Text) => this.setState({ankleopen: Text})} value={this.state.ankleopen}/>
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