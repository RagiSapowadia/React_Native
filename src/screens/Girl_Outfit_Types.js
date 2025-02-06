import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { girloutfitstyles } from './Style/Girl_Outfit_Types_Style';
import { customerstyles } from './Style/Customer_Home_Style';
export default class Girl_Outfit_Types extends Component {
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
      <View style={girloutfitstyles.container}>
        <View style={girloutfitstyles.upper}>
          <TouchableOpacity style={girloutfitstyles.Loginbutton}>
            <Image style={girloutfitstyles.logo} source={require('../assets/logo.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={girloutfitstyles.center}>
          <Text style={girloutfitstyles.centertext}>Outfits for Women</Text>
        
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("Maxi")}>
              <Image source={require('../assets/maxidress.png')} style={girloutfitstyles.maxi}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Lehanga")}>
              <Image source={require('../assets/lehanga.jpeg')} style={girloutfitstyles.lehanga} />
            </TouchableOpacity> 
            <Text style={girloutfitstyles.maxitext}>Maxi Dress</Text>
            <Text style={girloutfitstyles.lehangatext}>Lehanga</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Sarara")}>
              <Image source={require('../assets/sarara.jpeg')} style={girloutfitstyles.sarara}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Kurti")}>
              <Image source={require('../assets/kurti.jpeg')} style={girloutfitstyles.kurti}/>
            </TouchableOpacity>
            <Text style={girloutfitstyles.sararatext}>Sarara</Text>
            <Text style={girloutfitstyles.kurtitext}>Kurti</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Patiyala")} >
              <Image source={require('../assets/patiyala.jpg')} style={girloutfitstyles.patiyala}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Jacket")} >
              <Image source={require('../assets/gjacket.jpg')} style={girloutfitstyles.jacket}/>
            </TouchableOpacity>
            <Text style={girloutfitstyles.patiyalatext}>Patiyala Dress</Text>
            <Text style={girloutfitstyles.jackettext}>Jacket</Text>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("BellBottom")}>
              <Image source={require('../assets/bellbottom.jpg')} style={girloutfitstyles.bell}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("IndoWestern")}>
              <Image source={require('../assets/indowestern.jpg')} style={girloutfitstyles.indo}/>
            </TouchableOpacity>
            <Text style={girloutfitstyles.belltext}>Bell Bottom</Text>
            <Text style={girloutfitstyles.indotext}>Indo Western</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("JumpSuit")}>
              <Image source={require('../assets/jumpsuit.jpeg')} style={girloutfitstyles.jump}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Blazer")}>
              <Image source={require('../assets/gblazer.jpeg')} style={girloutfitstyles.blazer} />
            </TouchableOpacity> 
            <Text style={girloutfitstyles.jumptext}>Jump Suit</Text>
            <Text style={girloutfitstyles.blazertext}>Blazer</Text>
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
