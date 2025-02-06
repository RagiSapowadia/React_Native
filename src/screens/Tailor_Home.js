import React, {Component} from 'react';
import {View,StyleSheet, Text, Image, TouchableOpacity, TextInput, ToastAndroid, BackHandler, StatusBar, Animated, Easing} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { tailorstyles } from './Style/Tailor_Home_Style';
import { customerstyles } from './Style/Customer_Home_Style';
import { findtailor } from './Style/Find_Tailor_Style';

import auth  from "@react-native-firebase/auth";
import firestore  from "@react-native-firebase/firestore";
export default class TailorHome extends Component 
{    
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      animatedValue: new Animated.Value(0),
      Mob:"",
      Name:""
    }    
  }  
  componentDidMount() {
    const id = auth().currentUser;
    firestore().collection('Tailor').doc(id.uid).get().then((docRef) => {
      // let name=docRef.data().Name;
        this.setState({Mob:docRef.data().mob}),
        this.setState({Name:docRef.data().cust})
      });
      }
  render() 
  { 
    return(
    <View style={tailorstyles.container}>
      <View style={tailorstyles.upper}>
        <TouchableOpacity style={tailorstyles.Loginbutton}>
          <Image style={tailorstyles.logo} source={require('../assets/logo.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={tailorstyles.center}>
        <View>
          <Text style={tailorstyles.centertext}>Fabrics</Text>
          <Text style={tailorstyles.centerendtext} onPress={() => this.props.navigation.navigate("Tailor_Fabric_types")}>See all</Text>
        </View>
        <View style={{ height:"25%", width:"100%"}}>
        <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ height:150,width:140,marginRight:22}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Denim")}>
                      <Image source={require('../assets/denim.jpg')} style={tailorstyles.fabric1}/>
                      <Text style={tailorstyles.denim}>Denim</Text>
                    </TouchableOpacity>                
                </View>
                <View style={{ paddingLeft:22,height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginRight:22}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Chiffon")}>
                      <Image source={require('../assets/chiffon.png')} style={tailorstyles.fabric2}/>
                      <Text style={tailorstyles.chiffon}>Chiffon</Text>
                    </TouchableOpacity>                
                </View>
                <View style={{ paddingLeft:22, height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginRight:22}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Velvet")}>
                      <Image source={require('../assets/velvet.jpg')} style={tailorstyles.fabric3}/>
                      <Text style={tailorstyles.velvet}>Velvet</Text>
                    </TouchableOpacity>                
                </View>
                <View style={{ paddingLeft:22, height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginRight:22}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Organza")}>
                      <Image source={require('../assets/organza.jpg')} style={tailorstyles.fabric4}/>
                      <Text style={tailorstyles.organza}>Organza</Text>
                    </TouchableOpacity>                
                </View>                
              </ScrollView>                           
        </View>
        </View>
        <View>
            <Text style={tailorstyles.categoryheading}>Latest Orders</Text>
              <View style={tailorstyles.order}>
                  <Image style={tailorstyles.pro} source={require('../assets/pro.png')}></Image>
                  <Text style={tailorstyles.name}>{this.state.Name}</Text>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("TProductInfo")}>
                    <Image style={tailorstyles.arrow} source={require('../assets/right-arrow.png')}></Image>
                  </TouchableOpacity>
                </View>
                
          </View>
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
    </View>    );
  }
}