import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const styles = StyleSheet.create({
  container: {
      flex: 1, backgroundColor: "white", position: "relative"
  },
  upper: {
    position: "relative",  borderColor: '#696969', borderBottomWidth:1, width:"100%", height:"9%"
  },
  bottom: {
    position: "relative", width:"100%", height:"6%"
  },
  bottomline: {
    position: "relative", width:"100%", height:"3%"
  },
  logo: {
    height:50, width:70, position: "absolute",marginLeft:20,  marginTop:10
  },
  notify: {
    height: 27,width:24, position:"absolute", marginLeft:350, marginTop:25
  },
  center: {
    width: "100%", height:"82%"
  },
  home: {
    height: 32,width:30,position:"absolute", marginLeft:35
  },
  hometext: {
    marginLeft: 34, position: "absolute", bottom: 20, color: '#000000', fontSize: 12
  },
  search: {
    height: 25,width:25,position:"absolute", marginLeft: 115, marginTop:3.6
  },
  searchtext: {
    marginLeft: 109, position: "absolute", bottom: 20, color: '#000000', fontSize: 12
  },
  category: {
    height: 28,width:28,position:"absolute", marginLeft: 185, marginTop:3.6
  },
  categorytext: {
    marginLeft: 174, position: "absolute", bottom: 20, color: '#000000', fontSize: 12
  },
  chat: {
    height: 28,width:28,position:"absolute", marginLeft: 255, marginTop:3.6
  },
  chattext: {
    marginLeft: 257, position: "absolute", bottom: 20, color: '#000000', fontSize: 12
  },
  profile: {
    height: 28,width:28,position:"absolute", marginLeft: 325, marginTop:3.6
  },
  profiletext: {
    marginLeft: 323, position: "absolute", bottom: 20, color: '#000000', fontSize: 12
  },
  centertext: {
    marginLeft: 35,marginTop:15, fontWeight: 'bold', color: '#000000', fontFamily: 'sans-serif-light', fontSize:20
  },
  category_trouser: {
    height:120, width:120, marginLeft:45,marginTop:35, backgroundColor:"pink", borderRadius:30
  },
  category_shirt: {
    height:120, width:120, marginLeft:225,marginTop:-124, backgroundColor:"pink", borderRadius:30
  },
  category_dress: {
    height:120, width:120, marginLeft:45,marginTop:35, backgroundColor:"pink", borderRadius:30
  },
  category_frock: {
    height:120, width:120, marginLeft:225,marginTop:-124, backgroundColor:"pink", borderRadius:30
  },
  category_suit: {
    height:120, width:120, marginLeft:45,marginTop:35, backgroundColor:"pink", borderRadius:30
  },
  category_kurti: {
    height:120, width:120, marginLeft:225,marginTop:-124, backgroundColor:"pink", borderRadius:30
  },
  category_purse: {
    height:120, width:120, marginLeft:45,marginTop:35, backgroundColor:"pink", borderRadius:30
  },
  category_gown: {
    height:120, width:120, marginLeft:225,marginTop:-120, backgroundColor:"pink", borderRadius:30
  },
});


export default class MerchantHome extends Component {
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
      <View style={styles.container}>
        <View style={styles.upper}>
          <TouchableOpacity style={styles.Loginbutton}>
            <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("M_Notify")}>
            <Image style={styles.notify} source={require('../assets/notify.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.center}>






                                                    {/* body */}














          </View>
        <View style={styles.bottom}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("M_home")}>
            <Image style={styles.home} source={require('../assets/home.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("M_search")}>
            <Image style={styles.search} source={require('../assets/search.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("M_category")}>
            <Image style={styles.category} source={require('../assets/category.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("M_chat")}>
            <Image style={styles.chat} source={require('../assets/chat.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("M_profile")}>
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
      </View>
    );
  }
}
