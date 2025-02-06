import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { merchantstyles } from './Style/Merchant_Home_Style';
import auth  from "@react-native-firebase/auth";
import firestore  from "@react-native-firebase/firestore";
import { customerstyles } from './Style/Customer_Home_Style';
import { tailorstyles } from './Style/Tailor_Home_Style';
export default class MerchantHome extends Component {
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
    firestore().collection('Merchant').doc(id.uid).get().then((docRef) => {
      // let name=docRef.data().Name;
        this.setState({Mob:docRef.data().mob}),
        this.setState({Name:docRef.data().cust})
      });
      }
  render() 
  { 
    return(  
      <View style={merchantstyles.container}>
        <View style={merchantstyles.upper}>
          <TouchableOpacity style={merchantstyles.Loginbutton}>
            <Image style={merchantstyles.logo} source={require('../assets/logo.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={merchantstyles.center}>
        <Text style={tailorstyles.categoryheading}>Latest Orders</Text>
              <View style={tailorstyles.order}>
                  <Image style={tailorstyles.pro} source={require('../assets/pro.png')}></Image>
                  <Text style={tailorstyles.name}>{this.state.Name}</Text>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("MProductInfo")}>
                    <Image style={tailorstyles.arrow} source={require('../assets/right-arrow.png')}></Image>
                  </TouchableOpacity>
                </View>
        </View>
        <View style={customerstyles.bottom}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("MerchantHome")}>
            <Image style={customerstyles.home} source={require('../assets/home.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("MerchantSearch")}>
            <Image style={customerstyles.search} source={require('../assets/search.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("MerchantHome")}>
            <Image style={customerstyles.category} source={require('../assets/category.png')}></Image>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("ProfileMerchant")}>
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
