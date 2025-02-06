import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text, ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { girloutfitstyles } from './Style/Girl_Outfit_Types_Style';
import { tailorliststyles } from './Style/Tailor_List_Style';
import { findtailor } from './Style/Find_Tailor_Style';
// import firebase  from "@react-native-firebase/app";
import auth  from "@react-native-firebase/auth";
import firestore  from "@react-native-firebase/firestore";
import { customerstyles } from './Style/Customer_Home_Style';
export default class FindTailor extends Component {
  constructor(props) 
  {
      super(props);
      this.state = 

      {
        animatedValue: new Animated.Value(0),
        username1: '',
        email1:'',
        mob1: '',
        username2: '',
        email2:'',
        mob2: '',
        username3: '',
        email3:'',
        mob3: '',
        username4: '',
        email4:'',
        mob4: '',
        username5: '',
        email5:'',
        mob5: '',
        username6: '',
        email6:'',
        mob6: '',
        username7: '',
        email7:'',
        mob7: '',
        username8: '',
        email8:'',
        mob8: '',
        CustEmail: '',
        CustMob:'',
        CustName: '',
      }    
  }
  
  componentDidMount() {
    const id = auth().currentUser;
    firestore().collection('Customer').doc(id.uid).get().then((docRef) => {
      // let name=docRef.data().Name;
        this.setState({CustName: docRef.data().Name}),
        this.setState({CustEmail: docRef.data().Email}),
        this.setState({CustMob: docRef.data().Number})
      });
    console.log(id.uid)
    firestore().collection('Tailor').doc("Y1jAttsuPmOWqpxzgEmJdqb13S03").get().then((docRef) => {
      // let name=docRef.data().Name;
        this.setState({username1: docRef.data().Name}),
        this.setState({email1: docRef.data().Email}),
        this.setState({mob1: docRef.data().Number})
      });
    firestore().collection('Tailor').doc("kPzJuPhp1bQusDv2FTViSRhBv7Q2").get().then((docRef) => {
      
        this.setState({username2: docRef.data().Name}),
        this.setState({email2: docRef.data().Email}),
        this.setState({mob2: docRef.data().Number})
        // this.setState({password: docRef.data().Password})
    });
    firestore().collection('Tailor').doc("hZaT74xIKPOdDmrcAbyyV74HUkk1").get().then((docRef) => {
      // let name=docRef.data().Name;
        this.setState({username3: docRef.data().Name}),
        this.setState({email3: docRef.data().Email}),
        this.setState({mob3: docRef.data().Number})
        // this.setState({password: docRef.data().Password})
    });
    firestore().collection('Tailor').doc("Y4XxxX0boIbanZwsA4e2mpIJrRy1").get().then((docRef) => {
      // let name=docRef.data().Name;
        this.setState({username4: docRef.data().Name}),
        this.setState({email4: docRef.data().Email}),
        this.setState({mob4: docRef.data().Number})
        // this.setState({password: docRef.data().Password})
    });
    firestore().collection('Tailor').doc("w3I5WQIv5oYegsBlyZbjrqFoMZc2").get().then((docRef) => {
      // let name=docRef.data().Name;
        this.setState({username5: docRef.data().Name}),
        this.setState({email5: docRef.data().Email}),
        this.setState({mob5: docRef.data().Number})
        // this.setState({password: docRef.data().Password})
    });
    firestore().collection('Tailor').doc("uSpBSxmsTHTQkrSyMKfkLaLAuV22").get().then((docRef) => {
      // let name=docRef.data().Name;
        this.setState({username6: docRef.data().Name}),
        this.setState({email6: docRef.data().Email}),
        this.setState({mob6: docRef.data().Number})
        // this.setState({password: docRef.data().Password})
    });
    firestore().collection('Tailor').doc("5QNaUwYBtYUesz0CMjcqzG4E1XF2").get().then((docRef) => {
      // let name=docRef.data().Name;
        this.setState({username7: docRef.data().Name}),
        this.setState({email7: docRef.data().Email}),
        this.setState({mob7: docRef.data().Number})
        // this.setState({password: docRef.data().Password})
    });
    firestore().collection('Tailor').doc("XLtfV1eIzDeQNJi7F9mfZM0nb1g2").get().then((docRef) => {
      // let name=docRef.data().Name;
        this.setState({username8: docRef.data().Name}),
        this.setState({email8: docRef.data().Email}),
        this.setState({mob8: docRef.data().Number})
        // this.setState({password: docRef.data().Password})
    });
  }
  nilesh() {
    firestore().collection('Tailor').doc("hZaT74xIKPOdDmrcAbyyV74HUkk1").update({
      cust: this.state.CustName,
      mob: this.state.CustMob
    });
    ToastAndroid.show ('Your order placed successfully', ToastAndroid.LONG);
  }
  mukesh() {
    firestore().collection('Tailor').doc("Y1jAttsuPmOWqpxzgEmJdqb13S03").update({
      cust: this.state.CustName,
      mob: this.state.CustMob
    });
    ToastAndroid.show ('Your order placed successfully', ToastAndroid.LONG);
  }
  jayant() {
    firestore().collection('Tailor').doc("kPzJuPhp1bQusDv2FTViSRhBv7Q2").update({
      cust: this.state.CustName,
      mob: this.state.CustMob
    });
    ToastAndroid.show ('Your order placed successfully', ToastAndroid.LONG);
  }
  shailesh() {
    firestore().collection('Tailor').doc("Y4XxxX0boIbanZwsA4e2mpIJrRy1").update({
      cust: this.state.CustName,
      mob: this.state.CustMob
    });
    ToastAndroid.show ('Your order placed successfully', ToastAndroid.LONG);
  }
  rita() {
    firestore().collection('Tailor').doc("5QNaUwYBtYUesz0CMjcqzG4E1XF2").update({
      cust: this.state.CustName,
      mob: this.state.CustMob
    });
    ToastAndroid.show ('Your order placed successfully', ToastAndroid.LONG);
  }
  nita() {
    firestore().collection('Tailor').doc("XLtfV1eIzDeQNJi7F9mfZM0nb1g2").update({
      cust: this.state.CustName,
      mob: this.state.CustMob
      
    });
    ToastAndroid.show ('Your order placed successfully', ToastAndroid.LONG);

  }
  dipti() {
    firestore().collection('Tailor').doc("w3I5WQIv5oYegsBlyZbjrqFoMZc2").update({
      cust: this.state.CustName,
      mob: this.state.CustMob
    });
    ToastAndroid.show ('Your order placed successfully', ToastAndroid.LONG);
  }
  renuka() {
    firestore().collection('Tailor').doc("uSpBSxmsTHTQkrSyMKfkLaLAuV22").update({
      cust: this.state.CustName,
      mob: this.state.CustMob
    });
    ToastAndroid.show ('Your order placed successfully', ToastAndroid.LONG);
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
          <View>
            <Text style={tailorliststyles.findtext}>Find your Tailor</Text>
          </View>
            <ScrollView>
            <View style={tailorliststyles.tailor}>
              <View >
                <Image style={tailorliststyles.pic} source={require('../assets/pro.png')}></Image>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.mukesh()}>
                <Text style={findtailor.name}>{this.state.username1}</Text>
                <Text style={findtailor.name}>{this.state.mob1}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={tailorliststyles.tailor}>
              <View >
                <Image style={tailorliststyles.pic} source={require('../assets/pro.png')}></Image>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.jayant()}>
                <Text style={findtailor.name}>{this.state.username2}</Text>
                <Text style={findtailor.name}>{this.state.mob2}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={tailorliststyles.tailor}>
              <View >
                <Image style={tailorliststyles.pic} source={require('../assets/pro.png')}></Image>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.nilesh()}>
                <Text style={findtailor.name}>{this.state.username3}</Text>
                <Text style={findtailor.name}>{this.state.mob3}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={tailorliststyles.tailor}>
              <View >
                <Image style={tailorliststyles.pic} source={require('../assets/pro.png')}></Image>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.shailesh()}>
                <Text style={findtailor.name}>{this.state.username4}</Text>
                <Text style={findtailor.name}>{this.state.mob4}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={tailorliststyles.tailor}>
              <View >
                <Image style={tailorliststyles.pic} source={require('../assets/pro.png')}></Image>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.dipti()}>
                <Text style={findtailor.name}>{this.state.username5}</Text>
                <Text style={findtailor.name}>{this.state.mob5}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={tailorliststyles.tailor}>
              <View >
                <Image style={tailorliststyles.pic} source={require('../assets/pro.png')}></Image>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.renuka()}>
                <Text style={findtailor.name}>{this.state.username6}</Text>
                <Text style={findtailor.name}>{this.state.mob6}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={tailorliststyles.tailor}>
              <View >
                <Image style={tailorliststyles.pic} source={require('../assets/pro.png')}></Image>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.rita()}>
                <Text style={findtailor.name}>{this.state.username7}</Text>
                <Text style={findtailor.name}>{this.state.mob7}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={tailorliststyles.tailor}>
              <View >
                <Image style={tailorliststyles.pic} source={require('../assets/pro.png')}></Image>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.nita()}>
                <Text style={findtailor.name}>{this.state.username8}</Text>
                <Text style={findtailor.name}>{this.state.mob8}</Text>
                </TouchableOpacity>
              </View>
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
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("Category")}>
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