import React,{Component} from 'react';
import { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text, TextInput } from 'react-native';
import auth  from "@react-native-firebase/auth";
// import firestore from "@react-native-firebase/firestore";
import { profilemerchantstyles } from './Style/profile_style_merchant';

export default class DelAcc extends Component {
  constructor(props) {
      super(props);
      this.state = {
          animatedValue: new Animated.Value(0),
      }    
  }
  render() 
  { 
    const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  }; 
    return( <View style={delaccstyles.container}>
        <Button title="Show dialog" onPress={showDialog} />
        <Dialog.Container visible={visible}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Delete" onPress={handleDelete} />
        </Dialog.Container>
      </View>       
    );
  }
}
