import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { fabricstyles } from './Style/Fabric_Typess_Style';
import { customerstyles } from './Style/Customer_Home_Style';
export default class Tailor_Category extends Component {
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
      <View style={fabricstyles.container}>
        <View style={fabricstyles.upper}>
          <TouchableOpacity style={fabricstyles.Loginbutton}>
            <Image style={fabricstyles.logo} source={require('../assets/logo.png')}></Image>
          </TouchableOpacity>
         
        </View>
        <View style={fabricstyles.center}>
          <Text style={fabricstyles.centertext}>Fabrics</Text>
        
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Denim")}>
              <Image source={require('../assets/denim.jpg')} style={fabricstyles.denim}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Chiffon")}>
              <Image source={require('../assets/chiffon.png')} style={fabricstyles.chiffon} />
            </TouchableOpacity> 
            <Text style={fabricstyles.denimtext}>Denim</Text>
            <Text style={fabricstyles.chiffontext}>Chiffon</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Velvet")}>
              <Image source={require('../assets/velvet.jpg')} style={fabricstyles.velvet}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Organza")}>
              <Image source={require('../assets/organza.jpg')} style={fabricstyles.organza}/>
            </TouchableOpacity >
            <Text style={fabricstyles.velvettext}>Velvet</Text>
            <Text style={fabricstyles.organzatext}>Organza</Text>
            <TouchableOpacity  onPress={()=> this.props.navigation.navigate("Silk")}>
              <Image source={require('../assets/silk.jpg')} style={fabricstyles.silk}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Wool")}>
              <Image source={require('../assets/wool.jpg')} style={fabricstyles.wool}/>
            </TouchableOpacity>
            <Text style={fabricstyles.silktext}>Silk</Text>
            <Text style={fabricstyles.wooltext}>Wool</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Satin")}>
              <Image source={require('../assets/satin.jpg')} style={fabricstyles.satin}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Poplin")}>
              <Image source={require('../assets/poplin.jpg')} style={fabricstyles.poplin}/>
            </TouchableOpacity>
            <Text style={fabricstyles.satintext}>Satin</Text>
            <Text style={fabricstyles.poplintext}>Poplin</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Cotton")}>
              <Image source={require('../assets/cotton.jpg')} style={fabricstyles.cotton}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Georgette")}>
              <Image source={require('../assets/georgette.jpg')} style={fabricstyles.georgette} />
            </TouchableOpacity> 
            <Text style={fabricstyles.cottontext}>Cotton</Text>
            <Text style={fabricstyles.georgettetext}>Georgette</Text>
        </View>   
        </ScrollView>
        </View>
        <View style={customerstyles.bottom}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorHome")}>
            <Image style={customerstyles.home} source={require('../assets/home.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorSearch")}>
            <Image style={customerstyles.search} source={require('../assets/search.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("Tailor_Fabric_types")}>
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