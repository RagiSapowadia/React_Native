import React, {Component} from 'react';
import {View,StyleSheet, Text, Image, TouchableOpacity, TextInput, ToastAndroid, BackHandler, StatusBar, Animated, Easing} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { customerstyles } from './Style/Customer_Home_Style';
export default class CustomerHome extends Component 
{    
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
    return(<View style={customerstyles.container}>
      <View style={customerstyles.upper}>
          <Image style={customerstyles.logo} source={require('../assets/logo.png')}></Image>
      </View>
      <ScrollView>
        <View style={customerstyles.center}>
          <View>
            <Text style={customerstyles.centertext}>Fabrics</Text>
            <Text style={customerstyles.centerendtext} onPress={() => this.props.navigation.navigate("Fabric_types")}>See all</Text>
          </View>
          <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={customerstyles.denimview}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Denim")}>
                  <Image source={require('../assets/denim.jpg')} style={customerstyles.denim}/>
                  <Text style={customerstyles.denimtext}>Denim</Text>
                </TouchableOpacity>                
              </View>
              <View style={customerstyles.chiffonview}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate("Chiffon")} >
                  <Image source={require('../assets/chiffon.png')} style={customerstyles.chiffon}/>
                  <Text style={customerstyles.chiffontext}>Chiffon</Text>
                </TouchableOpacity>                
              </View>
              <View style={customerstyles.velvetview}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate("Velvet")}>
                  <Image source={require('../assets/velvet.jpg')} style={customerstyles.velvet}/>
                  <Text style={customerstyles.velvettext}>Velvet</Text>
                </TouchableOpacity>                
              </View>
              <View style={customerstyles.organzaview}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Organza")} >
                    <Image source={require('../assets/organza.jpg')} style={customerstyles.organza}/>
                    <Text style={customerstyles.organzatext}>Organza</Text>
                </TouchableOpacity>                
              </View>                
            </ScrollView>                           
          </View>
          <View>
            <View>
              <Text style={customerstyles.centertext}>For Women</Text>
              <Text style={customerstyles.centerendtext} onPress={() => this.props.navigation.navigate("Girl_Outfit_Types")}>See all</Text>
            </View>        
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={customerstyles.maxiview}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate("Maxi")}>
                  <Image source={require('../assets/maxidress.png')} style={customerstyles.maxi}/>
                  <Text style={customerstyles.maxitext}>Maxi dress</Text>
                </TouchableOpacity>                
              </View>
              <View style={customerstyles.lehangaview}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate("Lehanga")}>
                  <Image source={require('../assets/lehanga.jpeg')} style={customerstyles.lehanga}/>
                  <Text style={customerstyles.lehangatext}>Lehenga</Text>
                </TouchableOpacity>                
              </View>
              <View style={customerstyles.sararaview}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate("Sarara")} >
                  <Image source={require('../assets/sarara.jpeg')} style={customerstyles.sarara}/>
                  <Text style={customerstyles.sararatext}>Sarara</Text>
                </TouchableOpacity>                
              </View>
              <View style={customerstyles.kurtiview}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Kurti")} >
                  <Image source={require('../assets/kurti.jpeg')} style={customerstyles.kurti}/>
                  <Text style={customerstyles.kurtitext}>Kurti</Text>
                </TouchableOpacity>                
              </View>                
            </ScrollView>  
          </View>
          <View>
            <View>
              <Text style={customerstyles.centertext}>For Men</Text>
              <Text style={customerstyles.centerendtext} onPress={() => this.props.navigation.navigate("Boy_Outfit_Types")}>See all</Text>
            </View>        
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={customerstyles.shirtview}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Shirt")}>
                  <Image source={require('../assets/shirt.png')} style={customerstyles.shirt}/>
                  <Text style={customerstyles.shirttext}>Shirt</Text>
                </TouchableOpacity>                
              </View>
              <View style={customerstyles.blazerview}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Boy_Blazer")}>
                  <Image source={require('../assets/blazer.jpeg')} style={customerstyles.blazer}/>
                  <Text style={customerstyles.blazertext}>Blazer</Text>
                </TouchableOpacity>                
              </View>
              <View style={customerstyles.shervaniview}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Shervani")}>
                  <Image source={require('../assets/shervani.jpg')} style={customerstyles.shervani}/>
                  <Text style={customerstyles.shervanitext}>Shervani</Text>
                </TouchableOpacity>                
              </View>
              <View style={customerstyles.trouserview}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Trouser")}>
                  <Image source={require('../assets/trouser.jpeg')} style={customerstyles.trouser}/>
                  <Text style={customerstyles.trousertext}>Trouser</Text>
                </TouchableOpacity>                
              </View>                
            </ScrollView>  
          </View>
        </View>    
      </ScrollView>
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
    </View>);
  }
}