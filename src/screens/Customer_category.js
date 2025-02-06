import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { boyoutfitstyles } from './Style/Boy_Outfit_Types_Style';
import { girloutfitstyles } from './Style/Girl_Outfit_Types_Style';
import { fabricstyles } from './Style/Fabric_Typess_Style';
import { customerstyles } from './Style/Customer_Home_Style';
export default class CustomerCategory extends Component {
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
          
        
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
        <Text style={boyoutfitstyles.centertext}>Outfits for Men</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Shirt")}>
              <Image source={require('../assets/shirt.png')} style={boyoutfitstyles.shirt}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Boy_Blazer")}>
              <Image source={require('../assets/blazer.jpeg')} style={boyoutfitstyles.blazer} />
            </TouchableOpacity> 
            <Text style={boyoutfitstyles.shirttext}>Shirt</Text>
            <Text style={boyoutfitstyles.blazertext}>Blazer</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Shervani")}>
              <Image source={require('../assets/shervani.jpg')} style={boyoutfitstyles.shervani}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Trouser")}>
              <Image source={require('../assets/trouser.jpeg')} style={boyoutfitstyles.trouser}/>
            </TouchableOpacity>
            <Text style={boyoutfitstyles.shervanitext}>Shervani</Text>
            <Text style={boyoutfitstyles.trousertext}>Trouser</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("WaistCoat")}>
              <Image source={require('../assets/waistcoat.jpg')} style={boyoutfitstyles.coat}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Kurta")}>
              <Image source={require('../assets/kurta.jpg')} style={boyoutfitstyles.kurta}/>
            </TouchableOpacity>
            <Text style={boyoutfitstyles.coattext}>Waist Coat</Text>
            <Text style={boyoutfitstyles.kurtatext}>Kurta</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("JodhpuriSuit")}>
              <Image source={require('../assets/jodhpurisuit.jpg')} style={boyoutfitstyles.jsuit}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Koti")}>
              <Image source={require('../assets/bkoti.jpg')} style={boyoutfitstyles.bkoti}/>
            </TouchableOpacity>
            <Text style={boyoutfitstyles.jsuittext}>Jodhpuri Suit</Text>
            <Text style={boyoutfitstyles.bkotitext}>Traditional Koti</Text>
            
        </View>   
        <Text style={girloutfitstyles.centertext}>Outfits for Women</Text>
        <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Maxi")}>
              <Image source={require('../assets/maxidress.png')} style={girloutfitstyles.maxi}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Lehanga")}>
              <Image source={require('../assets/lehanga.jpeg')} style={girloutfitstyles.lehanga} />
            </TouchableOpacity> 
            <Text style={girloutfitstyles.maxitext}>Maxi Dress</Text>
            <Text style={girloutfitstyles.lehangatext}>Lehanga</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Sarara")}>
              <Image source={require('../assets/sarara.jpeg')} style={girloutfitstyles.sarara}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Kurti")}>
              <Image source={require('../assets/kurti.jpeg')} style={girloutfitstyles.kurti}/>
            </TouchableOpacity>
            <Text style={girloutfitstyles.sararatext}>Sarara</Text>
            <Text style={girloutfitstyles.kurtitext}>Kurti</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Patiyala")}>
              <Image source={require('../assets/patiyala.jpg')} style={girloutfitstyles.patiyala}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Jacket")}>
              <Image source={require('../assets/gjacket.jpg')} style={girloutfitstyles.jacket}/>
            </TouchableOpacity>
            <Text style={girloutfitstyles.patiyalatext}>Patiyala Dress</Text>
            <Text style={girloutfitstyles.jackettext}>Jacket</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("BellBottom")}>
              <Image source={require('../assets/bellbottom.jpg')} style={girloutfitstyles.bell}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("IndoWestern")}>
              <Image source={require('../assets/indowestern.jpg')} style={girloutfitstyles.indo}/>
            </TouchableOpacity>
            <Text style={girloutfitstyles.belltext}>Bell Bottom</Text>
            <Text style={girloutfitstyles.indotext}>Indo Western</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("JumpSuit")}>
              <Image source={require('../assets/jumpsuit.jpeg')} style={girloutfitstyles.jump}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Blazer")}>
              <Image source={require('../assets/gblazer.jpeg')} style={girloutfitstyles.blazer} />
            </TouchableOpacity> 
            <Text style={girloutfitstyles.jumptext}>Jump Suit</Text>
            <Text style={girloutfitstyles.blazertext}>Blazer</Text>
        </View>   
        
          <Text style={fabricstyles.centertext}>Fabrics</Text>
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