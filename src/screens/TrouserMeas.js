import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text , TextInput} from 'react-native';
import { measstyles } from './Style/Measurement_Style';
import { customerstyles } from './Style/Customer_Home_Style';
import { max } from 'moment/moment';
import auth  from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { ScrollView } from 'react-native-gesture-handler';
export default class TrouserMeas extends Component {
  constructor(props) 
  {
      super(props);
      this.state = 
      {
        animatedValue: new Animated.Value(0),
        waist:"",
        hips:"",
        thigh:"",
        knee:"",
        aroundthigh:"",
        inseam:"",
        ankleopening:"",
        calf:"",
        length:""

      }    
  }
  measurement() {
    if(this.state.waist && this.state.hips && this.state.thigh && this.state.knee && this.state.aroundthigh && this.state.inseam && this.state.ankleopening && this.state.calf && this.state.length === "" ) {
        Alert("All Fields are Required...!")
    }
    const id = auth().currentUser;
    firestore().collection("Customer").doc(id.uid).update({
                Waist: this.state.waist,
                Hips: this.state.hips,
                Thigh: this.state.thigh,
                Knee: this.state.knee,
                AroundThigh: this.state.aroundthigh,
                Inseam: this.state.inseam,
                AnkleOpening:this.state.ankleopening,
                Calf: this.state.calf,
                Length: this.state.length
                
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
      <TextInput keyboardType='numeric' placeholder='Waist' style={measstyles.shoulder} onChangeText={(Text) => this.setState({waist: Text})} value={this.state.waist}/>
      <TextInput keyboardType='numeric' placeholder='Hips' style={measstyles.shoulder} onChangeText={(Text) => this.setState({hips: Text})} value={this.state.hips}/>
      <TextInput keyboardType='numeric' placeholder='Thigh' style={measstyles.shoulder} onChangeText={(Text) => this.setState({thigh: Text})} value={this.state.thigh}/>
      <TextInput keyboardType='numeric' placeholder='Knee' style={measstyles.shoulder} onChangeText={(Text) => this.setState({knee: Text})} value={this.state.knee}/>
      <TextInput keyboardType='numeric' placeholder='Around Thigh' style={measstyles.shoulder} onChangeText={(Text) => this.setState({aroundthigh: Text})} value={this.state.aroundthigh}/>
      <TextInput keyboardType='numeric' placeholder='Inseam' style={measstyles.shoulder} onChangeText={(Text) => this.setState({inseam: Text})} value={this.state.inseam}/>
      <TextInput keyboardType='numeric' placeholder='Ankle Opening' style={measstyles.shoulder} onChangeText={(Text) => this.setState({ankleopening: Text})} value={this.state.ankleopening}/>
      <TextInput keyboardType='numeric' placeholder='Calf' style={measstyles.shoulder} onChangeText={(Text) => this.setState({calf: Text})} value={this.state.calf}/>
      <TextInput keyboardType='numeric' placeholder='Trouser Length' style={measstyles.shoulder} onChangeText={(Text) => this.setState({length: Text})} value={this.state.length}/>
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