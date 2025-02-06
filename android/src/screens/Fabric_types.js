import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput, ToastAndroid, BackHandler, StatusBar, Animated, Easing} from 'react-native';


export default class Home extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            animatedValue: new Animated.Value(0),
        }    
    }

    // componentDidMount() {
    //     this.animate();
    //     setTimeout(() => {
    //         this.props.navigation.navigate("Login");
    //     }, 6000);
    // }

    // animate() {
    //     Animated.timing (
    //         this.state.animatedValue,
    //         { 
    //         toValue: 1,
    //         duration: 5000,
    //         easing: Easing.linear
    //     }).start()
    // }
    
    render() { 
        // const Anim = this.state.animatedValue.interpolate({
        //     inputRange: [0 , 1],
        //     outputRange: [0 , 1],
        // });

        return(
            <View>
                <Text>TYPES OF FABRICSe</Text>
            </View>
        );
    }
}