import React, {Component} from 'react';
import {View,StyleSheet, Text, Image, TouchableOpacity, TextInput, ToastAndroid, BackHandler, StatusBar, Animated, Easing} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create
(
  {
    container: 
    {
      flex: 1, backgroundColor: "white", position: "relative"
    },
    upper: 
    {
      position: "relative",  borderColor: '#696969', borderBottomWidth:1, width:"100%", height:"9%"
    },
    bottom: 
    {
      position: "relative", width:"100%", height:"7%", backgroundColor: '#FFFFFF'
    },
    bottomline: 
    {
      position: "relative", width:"100%", height:"3%", backgroundColor: '#FFFFFF'
    },
    logo: 
    {
      height:50, width:70, position: "absolute",marginLeft:20,  marginTop:10
    },
    fav:
    {
      height:25,width:25,marginLeft:270,marginTop:25, position:"absolute"
    },
    cart:
    {
      height:25,width:25,marginLeft:310,marginTop:25, position:"absolute"
    },
    notify: 
    {
      height: 27,width:24, position:"absolute", marginLeft:350, marginTop:25
    },
    center: 
    {
      width: "100%", height:"82%"
    },
    home: 
    {
      height: 32,width:30,position:"absolute", marginLeft:35, marginTop:10
    },
    hometext: 
    {
      marginLeft: 34, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
    },
    search: 
    {
      height: 25,width:25,position:"absolute", marginLeft: 115, marginTop:13.6
    },
    searchtext: 
    {
      marginLeft: 109, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
    },
    category: 
    {
      height: 28,width:28,position:"absolute", marginLeft: 185, marginTop:13.6
    },
    categorytext: {
      marginLeft: 174, position: "absolute" ,bottom: 15, color: '#000000', fontSize: 12
    },
    chat: {
      height: 28,width:28,position:"absolute", marginLeft: 255, marginTop:13.6
    },
    chattext: {
      marginLeft: 257, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
    },
    profile: {
      height: 28,width:28,position:"absolute", marginLeft: 325, marginTop:13.6
    },
    profiletext: {
      marginLeft: 323, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
    },
    centertext: {
      marginLeft: 35,marginTop:15,marginBottom:5, fontWeight: 'bold', color: '#000000', fontFamily: 'sans-serif-light', fontSize:20
    },
    centerendtext: {
      marginLeft: 330,marginBottom:10,marginTop:-22, fontWeight: 'bold', color: '#000000', fontFamily: 'sans-serif-light', fontSize:15, textDecorationLine:'underline'
    },
    fabric1:{
      height:110, width:110, marginLeft:25,marginTop:15, backgroundColor:"#696969"
    },
    fabric2:{
      height:110, width:110, marginLeft:1,marginTop:15, backgroundColor:"#696969"
    },
    fabric3:{
      height:110, width:110,marginLeft:3, marginTop:15, backgroundColor:"#696969"
    },
    fabric4:{
      height:110, width:110, marginLeft:3,marginTop:15, backgroundColor:"#696969"
    },
    denim:{
      marginLeft:55,marginTop:5, color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
    },
    chiffon:{
      marginLeft:30,marginTop:5,color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
    },
    velvet:{
      marginLeft:33,marginTop:4,color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
    },
    organza:{
      marginLeft:30  ,marginTop:5,color: '#000000', fontFamily: 'sans-serif-light', fontSize:15,
    },
    categoryheading: {
      marginLeft: 27,marginTop:15,marginBottom:15, fontWeight: 'bold', color: '#000000', fontFamily: 'sans-serif-light', fontSize:20
    },
    category_trouser: {
      height:120, width:120, marginLeft:45,marginTop:1, borderRadius:30
    },
    category_shirt: {
      height:120, width:120, marginLeft:225, marginTop:-120, borderRadius:30
    },
    category_dress: {
      height:120, width:120, marginLeft:45,marginTop:30, borderRadius:30
    },
    category_lehenga: {
      height:120, width:120, marginLeft:225,marginTop:-124, borderRadius:30
    },
    category_sarara: {
      height:120, width:120, marginLeft:45,marginTop:35, borderRadius:30
    },
    category_kurti: {
      height:120, width:120, marginLeft:225,marginTop:-124, borderRadius:30
    },
    category_suit: {
      height:120, width:120, marginLeft:45,marginTop:38, borderRadius:30
    },
    category_shervani: {
      height:120, width:120, marginLeft:225,marginTop:-124, borderRadius:30
    },
    panttext: {
      marginLeft:75,marginTop:15,fontSize:18,color:"#000000"
    },
    shirttext: {
      marginLeft:265,marginTop:-25,fontSize:18,color:"#000000"
    },
    maxitext: {
      marginLeft:65,marginTop:15,fontSize:18,color:"#000000"
    },
    lehengatext: {
      marginLeft:250,marginTop:-25,fontSize:18,color:"#000000"
    },
    sararatext: {
      marginLeft:80,marginTop:15,fontSize:18,color:"#000000"
    },
    kurtitext: {
      marginLeft:265,marginTop:-25,fontSize:18,color:"#000000"
    },
    suittext: {
      marginLeft:90,marginTop:15,fontSize:18,color:"#000000"
    },
    shervanitext: {
      marginLeft:253,marginTop:-25,fontSize:18,color:"#000000"
    },
  }
);
export default class TailorHome extends Component 
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
    return(<View style={styles.container}>
      <View style={styles.upper}>
        <TouchableOpacity style={styles.Loginbutton}>
          <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Favorite")}>
          <Image source={require('../assets/favourite.png')} style={styles.fav} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Cart")}>
          <Image source={require('../assets/cart.png')} style={styles.cart} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("T_notify")}>
          <Image style={styles.notify} source={require('../assets/notify.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <View>
          <Text style={styles.centertext}>Fabrics</Text>
          <Text style={styles.centerendtext} onPress={() => this.props.navigation.navigate("Fabric_types")}>See all</Text>
        </View>
        <View style={{ height:"25%", width:"100%"}}>
        <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ height:150,width:140,marginRight:22}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Denim_types")}>
                      <Image source={require('../assets/denim.jpg')} style={styles.fabric1}/>
                      <Text style={styles.denim}>Denim</Text>
                    </TouchableOpacity>                
                </View>
                <View style={{ paddingLeft:22,height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginRight:22}}>
                    <TouchableOpacity >
                      <Image source={require('../assets/chiffon.png')} style={styles.fabric2}/>
                      <Text style={styles.chiffon}>Chiffon</Text>
                    </TouchableOpacity>                
                </View>
                <View style={{ paddingLeft:22, height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginRight:22}}>
                    <TouchableOpacity >
                      <Image source={require('../assets/velvet.jpg')} style={styles.fabric3}/>
                      <Text style={styles.velvet}>Velvet</Text>
                    </TouchableOpacity>                
                </View>
                <View style={{ paddingLeft:22, height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginRight:22}}>
                    <TouchableOpacity >
                      <Image source={require('../assets/organza.jpg')} style={styles.fabric4}/>
                      <Text style={styles.organza}>Organza</Text>
                    </TouchableOpacity>                
                </View>                
              </ScrollView>                           
        </View>
        </View>
        <View>
            <Text style={styles.categoryheading}>Category wise orders</Text>
          </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <TouchableOpacity>
              <Image source={require('../assets/pant.jpg')} style={styles.category_trouser}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/shirt.png')} style={styles.category_shirt} />
            </TouchableOpacity> 
            <Text style={styles.panttext}>Trouser</Text>
            <Text style={styles.shirttext}>Shirt</Text>
            <TouchableOpacity >
              <Image source={require('../assets/maxidress.png')} style={styles.category_dress}/>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../assets/lehanga.jpeg')} style={styles.category_lehenga}/>
            </TouchableOpacity>
            <Text style={styles.maxitext}>Maxi Dress</Text>
            <Text style={styles.lehengatext}>Lehenga</Text>
            <TouchableOpacity  >
              <Image source={require('../assets/sarara.jpeg')} style={styles.category_sarara}/>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../assets/kurti.jpeg')} style={styles.category_kurti}/>
            </TouchableOpacity>
            <Text style={styles.sararatext}>Sarara</Text>
            <Text style={styles.kurtitext}>Kurti</Text>
            <TouchableOpacity  >
              <Image source={require('../assets/suit.jpeg')} style={styles.category_suit}/>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../assets/shervani.jpg')} style={styles.category_shervani}/>
            </TouchableOpacity>
            <Text style={styles.suittext}>Suit</Text>
            <Text style={styles.shervanitext}>Shervani</Text>
        </View>   
        </ScrollView>
      </View>   
      <View style={styles.bottom}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("M_home")}>
          <Image style={styles.home} source={require('../assets/home.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("T_search")}>
          <Image style={styles.search} source={require('../assets/search.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("C_home")}>
          <Image style={styles.category} source={require('../assets/category.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("T_chat")}>
          <Image style={styles.chat} source={require('../assets/chat.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("T_profile")}>
          <Image style={styles.profile} source={require('../assets/profile.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomline}>
        <Text style={styles.hometext}>Home</Text>
        <Text style={styles.searchtext}>Search</Text>
        <Text style={styles.categorytext}>Category</Text>
        <Text style={styles.chattext}>Chat</Text>
        <Text style={styles.profiletext}>Profile</Text>
      </View>
    </View>    );
  }
}