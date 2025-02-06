import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { boyoutfitstyles } from './Style/Boy_Outfit_Types_Style';
import { customerstyles } from './Style/Customer_Home_Style';
export default class Boy_Outfit_Types extends Component {
  constructor(props) 
  {
      super(props);
      this.state = 
      {
        animatedValue: new Animated.Value(0),
      }    
  }
  render() 
  { 
    return(  
      <View style={boyoutfitstyles.container}>
        <View style={boyoutfitstyles.upper}>
          <TouchableOpacity style={boyoutfitstyles.Loginbutton}>
            <Image style={boyoutfitstyles.logo} source={require('../assets/logo.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={boyoutfitstyles.center}>
          <Text style={boyoutfitstyles.centertext}>Outfits for Men</Text>
        
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Shirt")}>
              <Image source={require('../assets/shirt.png')} style={boyoutfitstyles.shirt}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Boy_Blazer")}>
              <Image source={require('../assets/blazer.jpeg')} style={boyoutfitstyles.blazer} />
            </TouchableOpacity> 
            <Text style={boyoutfitstyles.shirttext}>Shirt</Text>
            <Text style={boyoutfitstyles.blazertext}>Blazer</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Shervani")} >
              <Image source={require('../assets/shervani.jpg')} style={boyoutfitstyles.shervani}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Trouser")} >
              <Image source={require('../assets/trouser.jpeg')} style={boyoutfitstyles.trouser}/>
            </TouchableOpacity>
            <Text style={boyoutfitstyles.shervanitext}>Shervani</Text>
            <Text style={boyoutfitstyles.trousertext}>Trouser</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("WaistCoat")} >
              <Image source={require('../assets/waistcoat.jpg')} style={boyoutfitstyles.coat}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Kurta")} >
              <Image source={require('../assets/kurta.jpg')} style={boyoutfitstyles.kurta}/>
            </TouchableOpacity>
            <Text style={boyoutfitstyles.coattext}>Waist Coat</Text>
            <Text style={boyoutfitstyles.kurtatext}>Kurta</Text>
            <TouchableOpacity  onPress={()=> this.props.navigation.navigate("JodhpuriSuit")}>
              <Image source={require('../assets/jodhpurisuit.jpg')} style={boyoutfitstyles.jsuit}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Koti")}>
              <Image source={require('../assets/bkoti.jpg')} style={boyoutfitstyles.bkoti}/>
            </TouchableOpacity>
            <Text style={boyoutfitstyles.jsuittext}>Jodhpuri Suit</Text>
            <Text style={boyoutfitstyles.bkotitext}>Traditional Koti</Text>
            
        </View>   
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
