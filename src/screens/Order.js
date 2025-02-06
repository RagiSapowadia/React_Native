import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';



export default class Profile extends Component {
  constructor(props) {
      super(props);
      this.state = {
          animatedValue: new Animated.Value(0),
      }    
  }
  render() 
  { 
    return(  
        <Text>This is order page...</Text>
    );
  }
}
