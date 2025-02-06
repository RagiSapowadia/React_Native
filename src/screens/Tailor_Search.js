import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text,TextInput } from 'react-native';
import { profiletailorstyles } from './Style/profile_style_tailor';
import { tailorstyles } from './Style/Tailor_Home_Style';
import { searchstyles } from './Style/Search_Style';
import { customerstyles } from './Style/Customer_Home_Style';

export default class TailorSearch extends Component {
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
       <View style={searchstyles.searchbar}>
        <Image style={searchstyles.searchicon} source={require('../assets/searchbar.png')}></Image>
        
        <TextInput style={searchstyles.searchi} placeholder='Search'/>
        <Image style={searchstyles.cancel} source={require('../assets/cancel.png')}></Image>
        </View>



        <View style={tailorstyles.center}>

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
      </View>
    );
  }
}
