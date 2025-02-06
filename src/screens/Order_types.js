import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { girloutfitstyles } from './Style/Girl_Outfit_Types_Style';
import { boyoutfitstyles } from './Style/Boy_Outfit_Types_Style';
import { customerstyles } from './Style/Customer_Home_Style';
export default class Order_tcypes extends Component {
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
          <Text style={girloutfitstyles.centertext}>Category wise Orders</Text>
        
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <TouchableOpacity>
              <Image source={require('../assets/maxidress.png')} style={girloutfitstyles.maxi}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/lehanga.jpeg')} style={girloutfitstyles.lehanga} />
            </TouchableOpacity> 
            <Text style={girloutfitstyles.maxitext}>Maxi Dress</Text>
            <Text style={girloutfitstyles.lehangatext}>Lehanga</Text>
            <TouchableOpacity >
              <Image source={require('../assets/sarara.jpeg')} style={girloutfitstyles.sarara}/>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../assets/kurti.jpeg')} style={girloutfitstyles.kurti}/>
            </TouchableOpacity>
            <Text style={girloutfitstyles.sararatext}>Sarara</Text>
            <Text style={girloutfitstyles.kurtitext}>Kurti</Text>
            <TouchableOpacity  >
              <Image source={require('../assets/patiyala.jpg')} style={girloutfitstyles.patiyala}/>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../assets/gjacket.jpg')} style={girloutfitstyles.jacket}/>
            </TouchableOpacity>
            <Text style={girloutfitstyles.patiyalatext}>Patiyala Dress</Text>
            <Text style={girloutfitstyles.jackettext}>Jacket</Text>
            <TouchableOpacity  >
              <Image source={require('../assets/bellbottom.jpg')} style={girloutfitstyles.bell}/>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../assets/indowestern.jpg')} style={girloutfitstyles.indo}/>
            </TouchableOpacity>
            <Text style={girloutfitstyles.belltext}>Bell Bottom</Text>
            <Text style={girloutfitstyles.indotext}>Indo Western</Text>
            <TouchableOpacity>
              <Image source={require('../assets/jumpsuit.jpeg')} style={girloutfitstyles.jump}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/gblazer.jpeg')} style={girloutfitstyles.blazer} />
            </TouchableOpacity> 
            <Text style={girloutfitstyles.jumptext}>Jump Suit</Text>
            <Text style={girloutfitstyles.blazertext}>Blazer</Text>
        </View>   
        <View>
            <TouchableOpacity>
              <Image source={require('../assets/shirt.png')} style={boyoutfitstyles.shirt}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/blazer.jpeg')} style={boyoutfitstyles.blazer} />
            </TouchableOpacity> 
            <Text style={boyoutfitstyles.shirttext}>Shirt</Text>
            <Text style={boyoutfitstyles.blazertext}>Blazer</Text>
            <TouchableOpacity >
              <Image source={require('../assets/shervani.jpg')} style={boyoutfitstyles.shervani}/>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../assets/trouser.jpeg')} style={boyoutfitstyles.trouser}/>
            </TouchableOpacity>
            <Text style={boyoutfitstyles.shervanitext}>Shervani</Text>
            <Text style={boyoutfitstyles.trousertext}>Trouser</Text>
            <TouchableOpacity  >
              <Image source={require('../assets/waistcoat.jpg')} style={boyoutfitstyles.coat}/>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../assets/kurta.jpg')} style={boyoutfitstyles.kurta}/>
            </TouchableOpacity>
            <Text style={boyoutfitstyles.coattext}>Waist Coat</Text>
            <Text style={boyoutfitstyles.kurtatext}>Kurta</Text>
            <TouchableOpacity  >
              <Image source={require('../assets/jodhpurisuit.jpg')} style={boyoutfitstyles.jsuit}/>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../assets/bkoti.jpg')} style={boyoutfitstyles.bkoti}/>
            </TouchableOpacity>
            <Text style={boyoutfitstyles.jsuittext}>Jodhpuri Suit</Text>
            <Text style={boyoutfitstyles.bkotitext}>Traditional Koti</Text>
            
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
