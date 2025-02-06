import React, {Component} from 'react';
import {View,StyleSheet, Text, Image, TouchableOpacity, TextInput, ToastAndroid, BackHandler, StatusBar, Animated, Easing} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create
(
  {
    container: 
    {
      flex: 1, backgroundColor: "white", position: "relative",flexDirection: 'column',justifyContent: 'center',alignItems: 'stretch'
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
    chat: {
      height: 25,width:25, marginLeft: 352, marginTop:25
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
    order: {
      height: 29,width:29,position:"absolute", marginLeft: 257, marginTop:13.6
    },
    ordertext: {
      marginLeft: 255, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
    },
    profile: {
      height: 28,width:28,position:"absolute", marginLeft: 325, marginTop:13.6
    },
    profiletext: {
      marginLeft: 323, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
    },
    centertext: {
      marginLeft: 35,marginBottom:5,marginTop:15, fontWeight: 'bold', color: '#000000', fontFamily: 'sans-serif-light', fontSize:20
    },
    centerendtext: {
      marginLeft: 330,marginTop:-22, fontWeight: 'bold', color: '#000000', fontFamily: 'sans-serif-light', fontSize:15, textDecorationLine:"underline",marginBottom:10
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
      marginLeft:30  ,marginTop:5,color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
    },
    outfit1:{
      height:110, width:110,alignContent:"center", marginLeft:25,marginTop:15, backgroundColor:"#696969"
    },
    frock:{
      marginLeft:44,marginTop:5, color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
    },
    lehanga:{
      marginLeft:25,marginTop:5, color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
    },
    shervani:{
      marginLeft:25,marginTop:5, color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
    },
    shirt:{
      marginLeft:38,marginTop:5, color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
    },
    handbag:{
      marginLeft:20,marginTop:5,color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
    },
    traditionals:{
      marginLeft:18,marginTop:5,color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
    }
  }
);
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
    return(<View style={styles.container}>
      <View style={styles.upper}>
        <TouchableOpacity >
          <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Favorite")}>
          <Image source={require('../assets/favourite.png')} style={styles.fav} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Cart")}>
          <Image source={require('../assets/cart.png')} style={styles.cart} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Chat")}>
          <Image style={styles.chat} source={require('../assets/chat.png')}></Image>
        </TouchableOpacity>
      </View>
<ScrollView>
         <View style={styles.center}>
                        <View>
                          <Text style={styles.centertext}>Fabrics</Text>
                          <Text style={styles.centerendtext} onPress={() => this.props.navigation.navigate("Fabric_types")}>See all</Text>
                        </View>
                <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ height:150,width:140,marginRight:22}}>
                                <TouchableOpacity >
                                  <Image source={require('../assets/denim.jpg')} style={styles.fabric1}/>
                                  <Text style={styles.denim}>Denim</Text>
                                </TouchableOpacity>                
                            </View>
                            <View style={{ paddingLeft:22,height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1, marginRight:22, borderColor: '#696969'}}>
                                <TouchableOpacity >
                                  <Image source={require('../assets/chiffon.png')} style={styles.fabric2}/>
                                  <Text style={styles.chiffon}>Chiffon</Text>
                                </TouchableOpacity>                
                            </View>
                            <View style={{ paddingLeft:22, height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1, marginRight:22, borderColor: '#696969'}}>
                                <TouchableOpacity >
                                  <Image source={require('../assets/velvet.jpg')} style={styles.fabric3}/>
                                  <Text style={styles.velvet}>Velvet</Text>
                                </TouchableOpacity>                
                            </View>
                            <View style={{ paddingLeft:22, height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969'}}>
                                <TouchableOpacity >
                                  <Image source={require('../assets/organza.jpg')} style={styles.fabric4}/>
                                  <Text style={styles.organza}>Organza</Text>
                                </TouchableOpacity>                
                            </View>                
                        </ScrollView>                           
                  </View>
                  <View>
                          <View>
                            <Text style={styles.centertext}>Outfits</Text>
                            <Text style={styles.centerendtext} onPress={() => this.props.navigation.navigate("Outfit_types")}>See all</Text>
                          </View>        
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{height:150,width:140,marginRight:22}}>
                                    <TouchableOpacity >
                                      <Image source={require('../assets/maxidress.png')} style={styles.fabric1}/>
                                      <Text style={styles.frock}>Maxi dress</Text>
                                    </TouchableOpacity>                
                                </View>
                                <View style={{ paddingLeft:22, height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1,marginRight:22,  borderColor: '#696969'}}>
                                    <TouchableOpacity >
                                      <Image source={require('../assets/lehanga.jpeg')} style={styles.fabric2}/>
                                      <Text style={styles.lehanga}>Lehenga</Text>
                                    </TouchableOpacity>                
                                </View>
                                <View style={{ paddingLeft:22, height:150,width:140,alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginRight:22}}>
                                    <TouchableOpacity >
                                      <Image source={require('../assets/shirt.png')} style={styles.fabric3}/>
                                      <Text style={styles.shirt}>Shirt</Text>
                                    </TouchableOpacity>                
                                </View>
                                <View style={{ paddingLeft:22, height:150,width:140,alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginRight:22}}>
                                    <TouchableOpacity >
                                      <Image source={require('../assets/shervani.jpg')} style={styles.fabric4}/>
                                      <Text style={styles.shervani}>Shervani</Text>
                                    </TouchableOpacity>                
                                </View>                
                          </ScrollView>  
                  </View>
                  <View>
                          <View>
                            <Text style={styles.centertext}>Bags</Text>
                            <Text style={styles.centerendtext} onPress={() => this.props.navigation.navigate("Bag_types")}>See all</Text>
                          </View>        
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{height:150,width:140,marginRight:22}}>
                                    <TouchableOpacity >
                                      <Image source={require('../assets/purse3.jpg')} style={styles.fabric1}/>
                                      <Text style={styles.frock}>Sling Bags</Text>
                                    </TouchableOpacity>                
                                </View>
                                <View style={{ paddingLeft:22,marginRight:22, height:150,width:140,alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969'}}>
                                    <TouchableOpacity >
                                      <Image source={require('../assets/purse1.png')} style={styles.fabric2}/>
                                      <Text style={styles.lehanga}>Clutches</Text>
                                    </TouchableOpacity>                
                                </View>
                                <View style={{paddingLeft:22,marginRight:22, height:150,width:140,alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969'}}>
                                    <TouchableOpacity >
                                      <Image source={require('../assets/purse2.jpg')} style={styles.fabric3}/>
                                      <Text style={styles.handbag}>Hand Bags</Text>
                                    </TouchableOpacity>                
                                </View>
                                <View style={{ paddingLeft:22,marginRight:22, height:150,width:140,alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969'}}>
                                    <TouchableOpacity >
                                      <Image source={require('../assets/purse5.png')} style={styles.fabric4}/>
                                      <Text style={styles.traditionals}>Traditionals</Text>
                                    </TouchableOpacity>                
                                </View>                
                          </ScrollView>  
                </View>
          </View>    
</ScrollView>
      
      <View style={styles.bottom}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorHome")}>
          <Image style={styles.home} source={require('../assets/home.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("C_home")}>
          <Image style={styles.search} source={require('../assets/search.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Category")}>
          <Image style={styles.category} source={require('../assets/category.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("C_order")}>
          <Image style={styles.order} source={require('../assets/order.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Profile")}>
          <Image style={styles.profile} source={require('../assets/profile.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomline}>
        <Text style={styles.hometext}>Home</Text>
        <Text style={styles.searchtext}>Search</Text>
        <Text style={styles.categorytext}>Category</Text>
        <Text style={styles.ordertext}>Orders</Text>
        <Text style={styles.profiletext}>Profile</Text>
      </View>
    </View>    );
  }
}