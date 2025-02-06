import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { customerstyles } from './Style/Customer_Home_Style';
import { TextInput } from 'react-native-gesture-handler';
import { searchstyles } from './Style/Search_Style';

export default class CustomerSearch extends Component {
  constructor(props) {
      super(props);
      this.state = {
          animatedValue: new Animated.Value(0),
      }    
  }


  render() 
  {     
    
    return(  
       <View>
        
        <View style={searchstyles.searchbar}>
        <Image style={searchstyles.searchicon} source={require('../assets/searchbar.png')}></Image>
        
        <TextInput style={searchstyles.searchi} placeholder='Search'/>
        <Image style={searchstyles.cancel} source={require('../assets/cancel.png')}></Image>
        </View>


        <View style={customerstyles.center}>
        
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