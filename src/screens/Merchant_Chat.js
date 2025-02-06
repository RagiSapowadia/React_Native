import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { profilemerchantstyles } from './Style/profile_style_merchant'; 
import { merchantstyles } from './Style/Merchant_Home_Style'; 


export default class MerchantChat extends Component {
  constructor(props) {
      super(props);
      this.state = {
          animatedValue: new Animated.Value(0),
      }    
  }
  render() 
  { 
    return(  
       <View style={merchantstyles.container}>
        <View style={merchantstyles.upper}>
          <TouchableOpacity style={merchantstyles.Loginbutton}>
            <Image style={merchantstyles.logo} source={require('../assets/logo.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("MerchantNotify")}>
            <Image style={merchantstyles.notify} source={require('../assets/notify.png')}></Image>
          </TouchableOpacity>
        </View>

        <View style={merchantstyles.center}>

        </View>




        <View style={profilemerchantstyles.bottom}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("MerchantHome")}>
          <Image style={profilemerchantstyles.home} source={require('../assets/home.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("MerchantSearch")}>
          <Image style={profilemerchantstyles.search} source={require('../assets/search.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("MerchantCategory")}>
          <Image style={profilemerchantstyles.category} source={require('../assets/category.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("MerchantChat")}>
          <Image style={profilemerchantstyles.chat} source={require('../assets/chat.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("ProfileMerchant")}>
          <Image style={profilemerchantstyles.profilebottom} source={require('../assets/profile.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={profilemerchantstyles.bottomline}>
        <Text style={profilemerchantstyles.hometext}>Home</Text>
        <Text style={profilemerchantstyles.searchtext}>Search</Text>
        <Text style={profilemerchantstyles.categorytext}>Category</Text>
        <Text style={profilemerchantstyles.chattext}>Chat</Text>
        <Text style={profilemerchantstyles.profiletext}>Profile</Text>
      </View>
      </View>
    );
  }
}
