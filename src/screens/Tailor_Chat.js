import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { profiletailorstyles } from './Style/profile_style_tailor';
import { tailorstyles } from './Style/Tailor_Home_Style';

export default class TailorChat extends Component {
  constructor(props) {
      super(props);
      this.state = {
          animatedValue: new Animated.Value(0),
      }    
  }
  render() 
  { 
    return(  
       
        <View style={tailorstyles.container}>
          <View style={tailorstyles.upper}>
        <TouchableOpacity style={tailorstyles.Loginbutton}>
          <Image style={tailorstyles.logo} source={require('../assets/logo.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("TailorFavorite")}>
          <Image source={require('../assets/favourite.png')} style={tailorstyles.fav} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("TailorCart")}>
          <Image source={require('../assets/cart.png')} style={tailorstyles.cart} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorNotify")}>
          <Image style={tailorstyles.notify} source={require('../assets/notify.png')}></Image>
        </TouchableOpacity>
      </View>


        <View style={tailorstyles.center}>

        </View>




          <View style={profiletailorstyles.bottom}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorHome")}>
          <Image style={profiletailorstyles.home} source={require('../assets/home.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorSearch")}>
          <Image style={profiletailorstyles.search} source={require('../assets/search.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorCategory")}>
          <Image style={profiletailorstyles.category} source={require('../assets/category.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorChat")}>
          <Image style={profiletailorstyles.chat} source={require('../assets/chat.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Profile_tailor")}>
          <Image style={profiletailorstyles.profilebottom} source={require('../assets/profile.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={profiletailorstyles.bottomline}>
        <Text style={profiletailorstyles.hometext}>Home</Text>
        <Text style={profiletailorstyles.searchtext}>Search</Text>
        <Text style={profiletailorstyles.categorytext}>Category</Text>
        <Text style={profiletailorstyles.chattext}>Chat</Text>
        <Text style={profiletailorstyles.profiletext}>Profile</Text>
      </View>
    </View>
   
        
    );
  }
}
