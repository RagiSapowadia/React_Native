import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { denimstyles } from './Style/Denim_Style';
import { buystyles } from './Style/Buy_Style';
export default class Denim extends Component {
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
      <View>

      
        <View style={buystyles.ordersumm}>
            <Text style={buystyles.order}>Order</Text>
            <Text style={buystyles.summary}>Summary</Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/arrow.png')} style={buystyles.backarrow}/>
        </TouchableOpacity>
        <View>
          <Image source={require('../assets/denim.jpg')} style={buystyles.denimimg} />
        </View>
        <View>
            <Text style={buystyles.product_name}>Denim Fabric</Text>
            <Text style={buystyles.product_price}>₹250</Text>
            <Text style={buystyles.product_qty}>x1</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Denim")}>
            <Image  source={require('../assets/right-arrow.png')} style={buystyles.rightarrow} />
            </TouchableOpacity>
           
        </View>
      
      </View>
      
     
    );
  }
}
