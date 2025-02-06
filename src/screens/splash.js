import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput, ToastAndroid, BackHandler, StatusBar, Animated, Easing} from 'react-native';


export default class Splash extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            animatedValue: new Animated.Value(0),
        }    
    }

    componentDidMount() {
        this.animate();
        setTimeout(() => {
            this.props.navigation.navigate("Login");
        }, 6000);
    }

    animate() {
        Animated.timing (
            this.state.animatedValue,
            { 
            toValue: 1,
            duration: 5000,
            easing: Easing.linear
        }).start()
    }
    
    render() { 
        const Anim = this.state.animatedValue.interpolate({
            inputRange: [0 , 1],
            outputRange: [0 , 1],
        });

        return(
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" }}>
                {/* <Image style={{ width: 150, height: 150 }} source = {require('../assets/Cup.png')} ></Image> */}
                <Animated.Text style={{ color: "#8B4513", fontFamily: "cursive", fontSize: 50, opacity: Anim }}>SPLASH SCREEN</Animated.Text>
            </View>
        );
    }
}